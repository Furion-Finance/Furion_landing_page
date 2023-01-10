import { Message, Loading } from 'element-ui/lib/element-ui.common';

export default function ({ app, store, $axios, redirect }, inject) {
  let loadingInstance = null;
  let timeout;
  const delay = 200;
  $axios.onRequest(config => {
    config = {
      useToken: true,
      useLoading: true,
      useMessage: true,
      usePager: false,
      params: {},
      ...config,
    };

    config.baseURL = process.env.BASE_URL;
    if (config.usePager) {
      config.params.pageNum = app.context.query.pageNum || 1;
      config.params.pageSize = app.context.query.pageSize || 10;
    }

    if (process.client) {
      clearTimeout(timeout);
      if (config.useLoading) {
        timeout = setTimeout(() => {
          loadingInstance = Loading.service({
            fullscreen: true,
            text: '加载中...',
          });
        }, delay);
      }
    }

    let token = store.state.user.token;
    if (token && config.useToken) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  $axios.onResponse(res => {
    clearTimeout(timeout);
    if (loadingInstance) {
      loadingInstance.close();
    }

    if (res.config.usePager) {
      const { pageNum, pageSize } = res.config.params;
      return {
        ...res.data,
        pageNum: pageNum - 0,
        pageSize: pageSize - 0,
      };
    }

    return res.data;
  });

  $axios.onError(error => {
    clearTimeout(timeout);
    if (loadingInstance) {
      loadingInstance.close();
    }

    if (!error.response) {
      return;
    }

    const code =
      parseInt(error.response && error.response.status) ||
      parseInt(error.response && error.response.code);

    if (error.response) {
      console.log('error.response: ', error.response.data);
    }

    if (code === 401) {
      redirect(`/login`);
      store.commit('save', ['user.token', null]);
      return;
    }

    if (process.client && error.config.useMessage) {
      Message({
        message: `[${code}]${error.response.data.message}`,
        type: 'error',
      });
      return Promise.reject(error.response);
    }
  });
}
