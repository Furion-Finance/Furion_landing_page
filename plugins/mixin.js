import Vue from 'vue';
import lodash from 'lodash';
import dayjs from 'dayjs';
import Dinero from 'dinero.js';

export default ({ app }, inject) => {
  inject('holder', (w = 100, h = w) => {
    return `http://via.placeholder.com/${w}x${h}`;
  });

  inject('bg', url => {
    return { backgroundImage: `url(${url})` };
  });

  inject('_', lodash);
  inject('dayjs', dayjs);
  inject('Dinero', Dinero);
  inject('amount', (v = 0) => {
    if (!v) {
      v = 0;
      return '0.00';
    }
    return Dinero({ amount: v }).toFormat('0,0.00');
  });
};

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err);
};
