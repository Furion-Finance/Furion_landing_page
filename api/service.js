import axios from 'axios';

const service = axios.create({
  // baseURL: 'http://127.0.0.1:6010',
  baseURL: 'https://data.furion.io:6010',
  // baseURL: 'https://furion.io:6010',
  timeout: 6000000,
});

service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  return response;
}, function (error) {
  window.location.href = "https://furion.io/error"
  // return service.push("error");
  return Promise.reject(error);
});

export const service_coinmarket = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  timeout: 6000000,
});

export const service_etherscan = axios.create({
  baseURL: 'https://api-goerli.etherscan.io/api',
  timeout: 6000000,
});

export default service;