// @flow

import {
  Dimensions,
  Platform,
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const commonBgColor = '#FFCD7A';
const blackFontColor = '#3D3D3D';

/*
 * iphoneX 序列机型的屏幕高宽
 * XSM SCREEN_HEIGHTL = 896.000000,SCREEN_WIDTHL = 414.000000  2.1642512077
 * XS  SCREEN_HEIGHTL = 812.000000,SCREEN_WIDTHL = 375.000000  2.1653333333
 * XR  SCREEN_HEIGHTL = 896.000000,SCREEN_WIDTHL = 414.000000  2.1642512077
 * X   SCREEN_HEIGHTL = 812.000000,SCREEN_WIDTHL = 375.000000  2.1653333333
 * 目前iPhone X序列手机的适配算法：高宽比先转换为字符串，截取前三位，转换为number类型 再乘以100
*/
const isIphoneX = (Platform.OS === 'ios' && (Number((Number((`${screenH / screenW}`).substr(0, 4))) * 100) === 216));

module.exports = {
  screenW,
  screenH,
  commonBgColor,
  blackFontColor,
  isIphoneX,
};
