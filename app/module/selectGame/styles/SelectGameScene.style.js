// @flow

import {
  StyleSheet,
  // Dimensions,
} from 'react-native';
import { STYLE_CONST } from 'const';

export default StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: STYLE_CONST.commonBgColor,
  },

  titleWraper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 175,
    paddingHorizontal: 30,
    width: STYLE_CONST.screenW,
  },

  bigTitle: {
    marginTop: 18,
    fontSize: 18,
    color: '#242424',
  },

  titleDetailWraper: {
    marginTop: 33,
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  titleDetail: {
    color: STYLE_CONST.blackFontColor,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 22,
  },

  titleDetailBeginStr: {
    fontSize: 36,
    color: '#242424',
    marginTop: -10,
  },

  titleDetailEndStr: {
    fontSize: 36,
    color: '#242424',
    marginTop: 20,
  },

  selectGameBtnWraper: {
    position: 'absolute',
    bottom: 32,
  },

  selectGameBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 174,
  },

  selectGameText: {
    fontSize: 20,
    color: 'white',
  },

  iconWraper: {
    borderRadius: 44,
    borderWidth: 4,
    width: 88,
    height: 88,
    borderColor: STYLE_CONST.blackFontColor,
    marginTop: -2,
    marginLeft: -4,
    position: 'relative',
    alignItems: 'center',
  },

  iconShadow: {
    backgroundColor: '#92784F',
    borderRadius: 44,
    width: 88,
    height: 88,
    marginBottom: 20,
    marginRight: (STYLE_CONST.screenW - 60 - 88 * 3) / 2,
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  iconState: {
    position: 'absolute',
    bottom: -14,
  },

  scrollView: {
    width: '100%',
    marginTop: -100,
    zIndex: -100,
  },

  scrollViewContent: {
    marginHorizontal: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingBottom: 140,
  },

  selectGameBgImg: {
    width: STYLE_CONST.screenW,
    height: 170,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    bottom: 0,
  },
});
