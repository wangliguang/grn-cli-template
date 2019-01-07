// @flow
/* eslint-disable no-restricted-globals */
import { Linking, Dimensions } from 'react-native';
import moment from 'moment';

const colors = [
  '#E74C3C', '#C0392B', '#1ABC9C',
  '#16A085', '#2ECC71', '#27AE60', '#3498DB',
  '#2980B9', '#9B59B6', '#8E44AD', '#34495E',
  '#2C3E50', '#E67E22',
  '#D35400', '#7F8C8D',
];


function getRandomNum(Min, Max) {
  const Range = Max - Min;
  const Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}

export function parseImgUrl(url: string) {
  if (/^\/\/.*/.test(url)) {
    return `http:${url}`;
  }
  return url;
}

export function genColor() {
  return colors[getRandomNum(0, colors.length - 1)];
}

export function link(url: string) {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      return Linking.openURL(url);
    }
    return null;
  }).catch(() => {
    // console.error('An error occurred', err);
  });
}

export function getFaceAction(size: number = 3) {
  // let arr = [];
  const arr = [1, 2, 3, 4];
  // if(Platform.OS === '')
  // let arr = [1,2,3,4];
  const out = [];
  while (out.length < size) {
    const temp = (Math.random() * arr.length) >> 0;
    out.push(arr.splice(temp, 1)[0]);
  }
  return out;
}

export function toDecimal2(x: string) { // 格式化
  let f = parseFloat(x);
  if (isNaN(f)) return '0.00';
  f = Math.round(parseInt(x) * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');

  if (rs < 0) {
    rs = s.length;
    s += '.';
  }

  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

export function MillisecondToTime(msd: number) {
  const s = parseInt(msd % 60);
  const m = parseInt(msd / 60);
  return `${m}:${s}`;
}

export function formatMoney(v: number) {
  if (v < 10000) return v;
  const rv = (v / 10000);
  const s = rv.toString();
  if (s.indexOf('.') < 0) {
    return `${rv}万`;
  }
  return `${rv.toFixed(2)}万`;
}

export function getRouterByName(key: string, routers: Array<Object> = []) {
  let name = '';
  routers.forEach((res) => {
    if (res.routeName === key) {
      name = res.routeName;
    }
  });
  return name;
}

// const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

export function px2dp(px: number) {
  return px * deviceW / basePx;
}

export function showTime(msgDate: string) {
  const nowDate = new Date();
  let result = '';

  // const startTime = nowDate.getTime();
  // const endTime = msgDate.getTime();
  // let dates = Math.abs((startTime - endTime))/(1000*60*60*24);\

  const d = moment.duration(moment(nowDate, 'YYYYMMDD').diff(moment(msgDate, 'YYYYMMDD')));
  const dates = Math.round(d.asDays());

  if (dates === 0) { // 同一天,显示时间
    result = moment(msgDate).format('HH:mm');
  } else if (dates === 1) { // 昨天
    result = moment(msgDate).format('昨天 HH:mm');
  } else if (dates < 7) { // 一周内
    result = moment(msgDate).locale('zh-cn').format('dddd HH:mm');
  } else { // 显示日期
    result = moment(msgDate).format('YYYY年MM月DD HH:mm');
  }
  return result;
}

export function isNum(v: string) {
  if (!!v && v.indexOf('.') > -1) {
    const fv = v.substring(v.indexOf('.') + 1);
    if (fv.length > 0) {
      if (fv.length > 2) {
        return v.substring(0, v.indexOf('.') + 3);
      }
      const t = v.substring(0, v.indexOf('.'));
      if (!/[\d]{1,2}/.test(fv)) {
        if (isNaN(parseInt(t))) {
          return '0.';
        }
        return `${t}.`;
      }
      if (!/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/.test(v)) {
        return toDecimal2(v);
      }
    }
    return v;
  }
  return v.replace(/[^\d]/g, '');
  // if(/^d*(?:.d{0,2})?$/.test(v)){
  //   return v;
  // }
  // return '0.00';
  // if(!!v){
  //  return v == 0 || new RegExp(
  //    "^[1-9]{1}[0-9]{0,8}$|^[1-9]{1}[0-9]{0,8}\\.[0-9]{1,2}$|^0\\.[0-9]{1,2}$"
  //  ).test(v);
  // }
  //  return false;
}

/* eslint-enable no-restricted-globals */
