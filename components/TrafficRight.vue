<style lang="scss" scoped>
.chart {
  height: 260px;
}
.chart-title {
  width: 100%;
  color: #202425;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  height: 68px;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.4) 9.21%,
    rgba(51, 53, 114, 0.5) 95.15%
  );
  border-radius: 12px;
}
.date-selector {
  position: relative;
  top: 0px;
  right: 25px;
}
.box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border-radius: 20px;
}
</style>
<template>
  <div class="box p-10px h-380px">
    <div class="box-top mb-24px">
      <div class="chart-title flex ">
        <div class="flex mb-10px h-full items-center pl-22px">
          <span class="text-[#C3C6CD] text-16px mr-10px">Traffic Components</span>
        </div>
        <DateSelector2
            class="date-selector"
            :time.sync="timeBtn"
            @changeTime="setData"></DateSelector2>
      </div>
    </div>

    <v-chart ref="vChart" autoresize class="chart" :option="option" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import {DateSelector2} from "@/components/DateSelector2.vue"
import { rowData, xTime } from "@/assets/chartData3.js";

export default {
  name: "TrafficRight",
  components: {},
  provide: {},
  props: [
    "hour_traffic",
    "daily_traffic",
    "all_traffic",
  ],
  data() {
    return {
      num: 12.98,
      scale: "",
      timeBtn: "ALL",
      valueList: [],
    };
  },
  computed: {
    ...mapState("admin", ["connectStatus"]),
    dataArr() {
      var arr = [];
      if (this.timeBtn == "1H") {
        arr = [{value:this.hour_traffic.from_twitter,name:'Traffic From Twitter'},{value:this.hour_traffic.from_search,name:"Traffic From Search Engine"}];
      } else if (this.timeBtn == "1D") {
        arr = [{value:this.daily_traffic.from_twitter,name:'Traffic From Twitter'},{value:this.daily_traffic.from_search,name:"Traffic From Search Engine"}];
      } else if (this.timeBtn == "ALL") {
        arr = [{value:this.all_traffic.from_twitter,name:'Traffic From Twitter'},{value:this.all_traffic.from_search,name:"Traffic From Search Engine"}];
      }
      // for(let i = 0; i < arr.length; i++) {
      //   arr[i] = Math.floor((arr[i]/1000000) * 100) / 100
      // }
      return arr;
    },
    option() {
      return {
        // visualMap: [
        //   {
        //     show: false,
        //     inRange: {
        //         colorLightness: [0, 1],
        //     },
        //   },
        // ],
        title: [
          {
            left: "center",
          },
        ],
        tooltip: {
          trigger: "item",
          backgroundColor: "#1F1F41",
          className: "chart-tooltip-wrap",
        },
        series: [
          {
            type: "pie",
            center: ['50%', '50%'],
            showSymbol: false,
            data: this.valueList,
            // roseType: 'radius',
            itemStyle: {
                color: '#FA6BE1',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
          },
        ],
      };
    },
  },
  mounted() {
    this.$refs.vChart.clear();
    this.formatData(this.dataArr);
    // this.num=this.valueList[0];
    this.$refs.vChart.setOption(this.option, true);
  },
  methods: {
    formatData(data) {
      this.valueList = data.map(function (item) {
        return item;
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
    show(num) {
      if (num > 1000000000) {
        this.scale="B";
        return (num / 1000000000).toFixed(2);
      } else if (num > 1000000) {
        this.scale="M";
        return (num / 1000000).toFixed(2)
      } else if (num > 1000) {
        this.scale="K";
        return (num / 1000).toFixed(2)
      } else {
        this.scale="";
        return num;
      }
    },
  },
};
</script>
