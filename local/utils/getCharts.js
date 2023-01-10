let echarts = require('echarts');

let getCharts = function (data, type = 1) {
  return {
    tooltip: {
      show: false,
      trigger: 'axis',
    },
    lineStyle: {
      normal: {
        color: '#32A8FF',
      },
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color:
            type == 1 ? 'rgba(143, 242, 179, 0.4)' : 'rgba(255, 155, 155, 0.4)',
        },
        {
          offset: 0.4,
          color:
            type == 1 ? 'rgba(143, 242, 179, 0.4)' : 'rgba(255, 155, 155, 0.4)',
        },
        {
          offset: 1,
          color: 'rgba(255, 255, 255, 0)',
        },
      ]),
    },
    grid: {
      left: '0',
      width: '100%',
      top: '0',
      height: '100%',
    },
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: [],
    },
    yAxis: {
      show: false,
      type: 'value',
      data: ['0'],
    },
    series: [
      {
        type: 'line',
        stack: '',
        areaStyle: { normal: {} },
        data,
        itemStyle: {
          normal: {
            color: type == 1 ? '#77CA95' : '#ED5959',
            lineStyle: {
              width: 2,
            },
          },
        },
        symbolSize: 0,
      },
    ],
  };
};

export default getCharts;
