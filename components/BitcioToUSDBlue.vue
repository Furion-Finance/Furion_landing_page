<style lang="scss" scoped>
    .chart {
      height: 350px;
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
              <span class="mr-20px text-[#FCFFFD] text-32px font-700">{{num}}</span>
              <span class="text-16px font-700 text-[rgba(252,255,253,0.6)]">FUR/ETH</span>
              <span class="text-16px font-700 text-[#D35D64]">-0.819(-0.1.15%)</span>
            </div>
            <p class="text-[rgba(252,255,253,0.8)] text-13px font-600">JUN 22.2022.05:00AM</p>
          </div>
          <Date-Selector
            class="date-selector"
            :class="{ '!top-80px': isMobile }"
            :time.sync="timeBtn"
            @changeTime="setData"
          ></Date-Selector>
        </div>

        <v-chart ref="vChart" autoresize class="chart" :option="option" />
      </div>
    </template>

    <script>
    import { mapState } from 'vuex';
    import { rowData, xTime } from '@/assets/chartData.js';
    export default {
      name: 'BitcioToUSD',
      components: {},
      provide: {},
      props: {},
      data() {
        return {
          num: 71.36,
          timeBtn: '1W',
          activeBtn2: 'Market Cap',
          dataList: [],
          valueList: [],
          options1: ['24H', '1W', '1M', '1Y'],
          options2: ['Price', 'Market Cap', 'TradingView', 'History'],
        };
      },
      computed: {
        ...mapState('admin', ['isMobile']),
        dataArr() {
          return rowData[this.activeBtn2][this.timeBtn];
        },
        colorMap() {
          return {
            green: {
              main: '#02AD6C',
              other: '#FF3E57',
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
                console.log(params);
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
                interval: 5,
                fontSize: '14px',
                color: 'rgba(252, 255, 253, 0.3)',
                margin: -14,
                align: 'center',
              },
            },
            yAxis: {
              show: false,
              axisLabel: {
                color: '#BCC6DA',
                verticalAlign: 'bottom',
              },
            },
            grid: {
              top: '10%',
              left: '0%',
              right: '2%',
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