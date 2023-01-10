import dayjs from 'dayjs';
const dateList = [
  'Jun 05',
  'Jun 06',
  'Jun 07',
  'Jun 08',
  'Jun 09',
  'Jun 10',
  'Jun 11',
  'Jun 12',
  'Jun 13',
  'Jun 14',
  'Jun 15',
  'Jun 16',
  'Jun 17',
  'Jun 18',
  'Jun 19',
  'Jun 20',
  'Jun 21',
  'Jun 22',
  'Jun 23',
  'Jun 24',
  'Jun 25',
  'Jun 26',
  'Jun 27',
  'Jun 28',
  'Jun 29',
  'Jun 30',
  'July 01',
  'July 02',
  'July 03',
  'July 04',
  'July 05',
  'July 06',
  'July 07',
  'July 08',
  'July 09',
  'July 10',
  'July 11',
  'July 12',
  'July 13',
  'July 14',
  'July 15',
  'July 16',
  'July 17',
  'July 18',
  'July 19',
  'July 20',
  'July 21',
  'July 22',
  'July 23',
  'July 24',
  'Jun 05',
  'Jun 06',
  'Jun 07',
  'Jun 08',
  'Jun 09',
  'Jun 10',
  'Jun 11',
  'Jun 12',
  'Jun 13',
  'Jun 14',
  'Jun 15',
  'Jun 16',
  'Jun 17',
  'Jun 18',
  'Jun 19',
  'Jun 20',
  'Jun 21',
  'Jun 22',
  'Jun 23',
  'Jun 24',
  'Jun 25',
  'Jun 26',
  'Jun 27',
  'Jun 28',
  'Jun 29',
  'Jun 30',
  'July 01',
  'July 02',
  'July 03',
  'July 04',
  'July 05',
  'July 06',
  'July 07',
  'July 08',
  'July 09',
  'July 10',
  'July 11',
  'July 12',
  'July 13',
  'July 14',
  'July 15',
  'July 16',
  'July 17',
  'July 18',
  'July 19',
  'July 20',
  'July 21',
  'July 22',
  'July 23',
  'July 24',
  'Jun 05',
  'Jun 06',
  'Jun 07',
  'Jun 08',
  'Jun 09',
  'Jun 10',
  'Jun 11',
  'Jun 12',
  'Jun 13',
  'Jun 14',
  'Jun 15',
  'Jun 16',
  'Jun 17',
  'Jun 18',
  'Jun 19',
  'Jun 20',
  'Jun 21',
  'Jun 22',
  'Jun 23',
  'Jun 24',
  'Jun 25',
  'Jun 26',
  'Jun 27',
  'Jun 28',
  'Jun 29',
  'Jun 30',
  'July 01',
  'July 02',
  'July 03',
  'July 04',
  'July 05',
  'July 06',
  'July 07',
  'July 08',
  'July 09',
  'July 10',
  'July 11',
  'July 12',
  'July 13',
  'July 14',
  'July 15',
  'July 16',
  'July 17',
  'July 18',
  'July 19',
  'July 20',
  'July 21',
  'July 22',
  'July 23',
  'July 24',
  'Jun 05',
  'Jun 06',
  'Jun 07',
  'Jun 08',
  'Jun 09',
  'Jun 10',
  'Jun 11',
  'Jun 12',
  'Jun 13',
  'Jun 14',
  'Jun 15',
  'Jun 16',
  'Jun 17',
  'Jun 18',
  'Jun 19',
  'Jun 20',
  'Jun 21',
  'Jun 22',
  'Jun 23',
  'Jun 24',
  'Jun 25',
  'Jun 26',
  'Jun 27',
  'Jun 28',
  'Jun 29',
  'Jun 30',
  'July 01',
  'July 02',
  'July 03',
  'July 04',
  'July 05',
  'July 06',
  'July 07',
  'July 08',
  'July 09',
  'July 10',
  'July 11',
  'July 12',
  'July 13',
  'July 14',
  'July 15',
  'July 16',
  'July 17',
  'July 18',
  'July 19',
  'July 20',
  'July 21',
  'July 22',
  'July 23',
  'July 24',
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) === min
    ? min + 1
    : Math.floor(Math.random() * (max - min)) + min;
}
// 生成一条数据
function createOneData(date) {
  return [date, getRandom(10, 250)];
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
  for (let i = 0; i < 200; i++) {
    arr.push(`12:${(i + '').padStart(2, '0')}`);
  }
  return arr;
}

// 1天数据
function getDayData() {
  const timeStamp = dayjs('2022-04-01 00:00').valueOf();
  const arr = [];
  for (let i = 0; i < 200; i++) {
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
  for (let i = 0; i < 200; i++) {
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
  for (let i = 0; i < 30; i++) {
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
  for (let i = 0; i < 200; i++) {
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
