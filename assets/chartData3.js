import dayjs from 'dayjs';
const dateList = [
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) === min
    ? min + 1
    : Math.floor(Math.random() * (max - min)) + min;
}
// 生成一条数据
function createOneData(date) {
  return [date, getRandom(50, 350)];
}
function createDataArr() {
  return dateList.map(item => createOneData(item));
}

const typeList = ['Price', 'Market Cap', 'TradingView', 'History'];
const timeList = ['24H', '1W', '1M', '1Y'];

export const rowData = {};

typeList.forEach(type => {
  rowData[type] = {};
  timeList.forEach(time => {
    rowData[type][time] = createDataArr();
  });
});

// console.table(rowData);

// 1小时的数据
function getHourData() {
  const arr = [];
  for (let i = 0; i < 40; i++) {
    arr.push(`12:${(i + '').padStart(2, '0')}`);
  }
  return arr;
}

// 1天数据
function getDayData() {
  const timeStamp = dayjs('2022-04-01 00:00').valueOf();
  const arr = [];
  for (let i = 0; i < 40; i++) {
    let time = dayjs(timeStamp + i * 1800 * 1000).format('hh:mm A');
    arr.push(time);
  }
  return arr;
}
// console.log(getDayData());

// 1周数据
function getWeekData() {
  const timeStamp = dayjs('2022-04-01 00:00').valueOf();
  const arr = [];
  for (let i = 0; i < 40; i++) {
    let time = dayjs(timeStamp + i * 3600 * 3 * 1000).format('M-D');
    arr.push(time);
  }
  return arr;
}
// console.log(getWeekData());

// 1个月数据
function getMonthData() {
  const timeStamp = dayjs('2022-04-01 00:00').valueOf();
  const arr = [];
  for (let i = 0; i < 40; i++) {
    let time = dayjs(timeStamp + i * 3600 * 15 * 1000).format('DD');
    arr.push(time);
  }
  return arr;
}
// console.log(getMonthData());
// 1年数据
function getYearData() {
  const timeStamp = dayjs('2022-04-01 00:00').valueOf();
  const arr = [];
  for (let i = 0; i < 40; i++) {
    let time = dayjs(timeStamp + i * 3600 * 180 * 1000).format('D');
    arr.push(time);
  }
  return arr;
}
// console.log(getYearData());
// x时间
export const xTime = {
  '24H': getDayData(),
  '1W': getWeekData(),
  '1M': getMonthData(),
  '1Y': getYearData(),
};

// console.log(dayjs().format('HH:mm'));
// console.log(dayjs('2022-04-03 00:00').valueOf());

// export default { rowData, xTime };

// const data = {
//   Price:{
//     '1H':[...],
//     '1D':[...],
//     ...
//   },
//   'Market Cap':{
//     '1H':[...],
//     '1D':[...],
//   },
// }
