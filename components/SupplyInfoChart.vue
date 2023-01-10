<style lang="scss" scoped>
.chart {
  height: 250px;
}
</style>
<template>
  <div>
    <v-chart ref="vChart" autoresize class="chart" :option="option" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { rowData, xTime } from '@/assets/chartData5.js';

export default {
  name: 'PoolsMarketCaps',
  components: {},
  provide: {},
  props: {},
  data() {
    return {
      num: 58.9,
      timeBtn: '1M',
      activeBtn2: 'Market Cap',
      dataList: [],
      valueList: [],
      options1: ['24H', '1W', '1M', '1Y'],
    };
  },
  computed: {
    ...mapState(['admin']),
    dataArr() {
      return rowData[this.activeBtn2][this.timeBtn];
    },
    colorMap() {
      return {
        red: {
          main: 'rgba(35, 203, 160, 1)',
          other: 'rgba(35, 203, 160, 1)',
          deep: 'rgba(10, 147, 150, 0.21)',
          bottom: 'rgba(255, 255, 255, 0)',
        },
      };
    },
    option() {
      return {
        visualMap: [
          {
            show: false,
            dimension: 1,
            pieces: [
              { min: 0, max: 100, color: this.colorMap.red.other },
              { min: 100, max: 400, color: this.colorMap.red.main },
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
          data: xTime[this.timeBtn],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 1,
            fontSize: '12px',
            color: 'rgba(252, 255, 253, 0.6)',
            padding: [10, 0, 0, 0],
            margin: 10,
            align: 'left',
          },
        },
        yAxis: {
          show: true,
          position: 'right',
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: 'rgba(252, 255, 253, 0.6)',
            padding: [0, 0, 0, 10],
            fontSize: '10px',
            verticalAlign: 'bottom',
            formatter: function (value, index) {
              return (value / 100).toFixed(2) + '%';
            },
          },
        },
        grid: {
          top: '20px',
          left: '2%',
          right: '8%',
          bottom: '4%',
          containLabel: true,
        },
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: this.valueList,
            smooth: true,
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.colorMap.red.deep, // 0%处的颜色
                  },
                  {
                    offset: 1,
                    color: this.colorMap.red.bottom, // 100% 处的颜色
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
  mounted() {
    this.$refs.vChart.clear();
    this.formatData(this.dataArr);
    this.$refs.vChart.setOption(this.option, true);
  },
  methods: {
    formatData(data) {
      this.dateList = data.map(function (item) {
        return item[0];
      });
      this.valueList = data.map(function (item) {
        return item[1];
      });
    },
    setData(type) {
      // this.activeBtn1 = type;
      this.$refs.vChart.clear();
      this.formatData(this.dataArr);
      this.$refs.vChart.setOption(this.option, true);
    },
    getNum(num) {
      this.num = num;
    },
  },
};
</script>
