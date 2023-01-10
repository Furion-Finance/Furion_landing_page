import Vue from 'vue';
import ECharts from 'vue-echarts';

import 'echarts';
export default () => {
  Vue.component('v-chart', ECharts);
};
