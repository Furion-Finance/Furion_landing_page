let CONFIG = {
  BASE: '/',
  PORT: 3000,
  HOST: '0.0.0.0',
  DEBUG: true,
  BASE_URL: 'http://127.0.0.1:1001',
};
//
module.exports = {
  dev: {
    ...CONFIG,
  },
  uat: {
    ...CONFIG,
  },
  prod: {
    ...CONFIG,
    DEBUG: false,
  },
};
