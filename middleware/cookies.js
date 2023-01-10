export default async ({ app, store, route }) => {
  if (process.server) {
    console.log(route.fullPath);
    let root = app.$_.cloneDeep(store.state);
    let cookies = app.$cookies.getAll();
    let keys = Object.keys(cookies);
    keys.forEach(key => {
      app.$_.set(root, key, cookies[key]);
    });
    store.replaceState(root);
  }
};
