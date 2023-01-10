<style lang="scss" scoped>
.chart {
  height: 350px;
  // width: 800px
}

.chart-title {
  width: 100%;
  color: #202425;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
}
</style>
<template>
  <div>
    <div class="chart-title flex mb-20px">
      <div class="ml-30px">
        <div class="mb-8px">
          <span class="mr-20px text-[#FCFFFD] text-32px font-700">{{ num }}</span>
          <span class="text-16px font-700 text-[rgba(252,255,253,0.6)]">{{ token_0 }}&nbsp;/&nbsp;{{
              token_1
          }}</span>
          <span :class="{
            'text-[#5DB57D]': change.startsWith('+'),
            'text-[#D35D64]': change.startsWith('-')
          }" class="text-16px font-700">&nbsp;{{ change }}({{ change_percentage }}%)</span>
        </div>
        <!-- <p class="text-[rgba(252,255,253,0.8)] text-13px font-600">{{ date_array.pop() }}</p> -->
      </div>
      <Date-Selector class="date-selector" :class="{ '!top-80px': isMobile }" :time.sync="timeBtn"
        @changeTime="setData"></Date-Selector>
    </div>

    <v-chart ref="vChart" autoresize class="chart" :option="option" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getPriceInfo, swap_info } from '@/config/furion_swap/swap';

import moment from "moment";

export default {
  name: 'FurionSwapPrice',
  components: {},
  props: ["token_0", "token_1"],
  provide: {},
  data() {
    return {
      date_str: '',
      change: '+0.01',
      change_percentage: '+0.01',
      price_data: [],
      timeBtn: '1M',
      activeBtn2: 'Market Cap',
      dataList: [],
      valueList: [],
      options1: ['24H', '1W', '1M'],
      price_array: [],
      date_array: []
    };
  },
  watch: {
    token_0: {
      handler: 'watchToken0',
      immediate: true,
    },
    token_1: {
      handler: 'watchToken1',
      immediate: true,
    },
  },
  computed: {
    ...mapState('admin', ['isMobile']),
    ...mapState(['chainId']),
    num() {
      return (swap_info.token_1_reserve / swap_info.token_0_reserve).toFixed(6)
    },
    colorMap() {
      return {
        green: {
          main: '#02AD6C',
          other: '#02AD6C',
          deep: '#C1E7D8',
          bottom: 'rgba(236,245,241,0)',
        },
        red: {
          main: '#ED5959',
          other: '#ED5959',
          deep: 'rgba(255, 155, 155, 0.4)',
          bottom: 'rgba(10, 25, 58, 0)',
        },
      };
    },
    option() {
      let color_theme;
      if (this.change.startsWith('+')) {
        color_theme = 'green';
      } else {
        color_theme = 'red';
      }

      let max_value = -100000000000;
      let min_value = 1000000000000;
      let price_array = this.price_array;
      for (let index = 0; index < price_array.length; index++) {
        if (price_array[index][1] > max_value) {
          max_value = price_array[index][1];
        }
        if (price_array[index][1] < min_value) {
          min_value = price_array[index][1];
        }
      }
      return {
        visualMap: [
          {
            show: false,
            dimension: 1,
            pieces: [
              { min: min_value / 1.5, max: max_value * 1.5, color: this.colorMap[color_theme].other },
              { min: 100, max: 400, color: this.colorMap[color_theme].main },
            ],
          },
        ],
        title: [
          {
            left: 'center',
          },
        ],
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#1F1F41',
          className: 'chart-tooltip-wrap',
          textStyle: {
            color: '#fff',
          },
          formatter: params => {
            // console.log(params);
            const num = params[0].data;
            this.getNum(num);
          },
        },
        xAxis: {
          show: true,
          data: this.date_array,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 8,
            fontSize: '12px',
            color: 'rgba(252, 255, 253, 0.3)',
            margin: 30,
            align: 'center',
          },
        },
        yAxis: {
          show: false,
          axisLabel: {
            color: '#BCC6DA',
            verticalAlign: 'bottom',
          },
          axisLine: {
            show: false,
          },
          min:min_value,
          max:max_value,
        },
        grid: {
          top: '10%',
          left: '-15%',
          right: '0%',
          bottom: '0%',
          containLabel: true,
        },
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: this.valueList,
            smooth: false,
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.colorMap[color_theme].deep, // 0%处的颜色
                  },
                  {
                    offset: 1,
                    color: this.colorMap[color_theme].bottom, // 100% 处的颜色
                  },
                ],
                globalCoord: false,
              },
            },
          },
        ],
      };
    },
  },
  async mounted() {
    this.$refs.vChart.clear();
    this.getDate();
    // setTimeout(() => {
    //   try {
    //     this.num = (swap_info.token_1_reserve / swap_info.token_0_reserve).toFixed(6);
    //   } catch (e) { }
    // }, 0)

    try {
      await this.initPriceInfo(this.token_0, this.token_1, 2, this.chainId);

      this.formatData(this.price_array);
      this.$refs.vChart.setOption(this.option, true);
    } catch (e) {
      console.warn(e);
      return
    }


  },
  methods: {
    async watchToken0() {
      console.log('Token 0 changed', this.token_0, this.token_1);
      // setTimeout(() => {
      //   try {
      //     this.num = (swap_info.token_1_reserve / swap_info.token_0_reserve).toFixed(6);
      //   } catch (e) { }
      // }, 3000)

      this.timeBtn = '1M';
      await this.initPriceInfo(this.token_0, this.token_1, 2, this.chainId);

      this.formatData(this.price_array);
      // await this.setData(this.timeBtn);
    },
    async watchToken1() {
      console.log('Token 1 changed', this.token_0, this.token_1);

      // setTimeout(() => {
      //   try {
      //     this.num = (swap_info.token_1_reserve / swap_info.token_0_reserve).toFixed(6);
      //   } catch (e) { }
      // }, 3000)
      this.timeBtn = '1M';
      await this.initPriceInfo(this.token_0, this.token_1, 2, this.chainId);

      this.formatData(this.price_array);
      // await this.setData(this.timeBtn);
    },

    async initPriceInfo(token_0, token_1, frequency, chainId) {
      // initialize price data and price info
      this.price_data = await getPriceInfo(token_0, token_1, frequency, chainId);
      if (this.price_data.length < 1) {
        console.warn('No price data');
        return
      }
      let old_price = this.price_data[0]['price'];
      let new_price = this.price_data[this.price_data.length - 1]['price'];
      if (new_price >= old_price) {
        this.change = '+' + (new_price - old_price).toFixed(4);
        this.change_percentage = '+' + ((new_price - old_price) / old_price * 100).toFixed(2);
      } else {
        this.change = '-' + (old_price - new_price).toFixed(4);
        this.change_percentage = '-' + ((old_price - new_price) / old_price * 100).toFixed(2);
      }
      this.num = new_price.toFixed(6);
      this.priceToData();
    },
    formatData(data) {
      // console.log('Raw data', data)
      this.dateList = data.map(function (item) {
        return item[0];
      });
      this.valueList = data.map(function (item) {
        return item[1];
      });
    },
    async setData(type) {
      // this.activeBtn1 = type;
      this.$refs.vChart.clear();
      this.timeBtn = type;
      if (type == '24H') {
        await this.initPriceInfo(this.token_0, this.token_1, 0, this.chainId)
      } else if (type == '1W') {
        await this.initPriceInfo(this.token_0, this.token_1, 1, this.chainId)
      } else if (type == '1M') {
        await this.initPriceInfo(this.token_0, this.token_1, 2, this.chainId)
      }
      else {
        return
      }
      this.formatData(this.price_array);
      this.$refs.vChart.setOption(this.option, true);
    },
    getNum(num) {
      this.num = num.toFixed(6);
    },
    getDate() {
      const date_now = moment().format('MMMM Do YYYY, h:mm:ss a');
      this.date_str = date_now;
    },

    priceToData() {
      let raw_data = this.price_data;
      let result = [];
      let date_array = [];
      for (let i = 0; i < raw_data.length; i++) {
        result.push([raw_data[i]['block_time'], raw_data[i]['price']]);
        if (this.timeBtn == '24H') {
          date_array.push(moment(raw_data[i]['block_time']).format('h:mm:ss'));
        } else if (this.timeBtn == '1W') {
          date_array.push(moment(raw_data[i]['block_time']).format('Do h:mm'));
        } else {
          date_array.push(moment(raw_data[i]['block_time']).format('MMM Do'));
        }
      }
      this.price_array = result;
      this.date_array = date_array;
      // console.log('After getting price', this.price_array)
    }
  },
};
</script>
