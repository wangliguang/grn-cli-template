// @flow

import {
  StyleSheet,
  // Dimensions,
} from 'react-native';

import { STYLE_CONST } from 'const';

export default StyleSheet.create({
  container: {
    backgroundColor: STYLE_CONST.commonBgColor,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  titleWraper: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bigTitle: {
    fontSize: 18,
    color: STYLE_CONST.blackFontColor,
  },

  titleDetailWraper: {
    marginTop: 33,
    flexDirection: 'row',
  },

  titleDetail: {
    color: '#E4AA5D',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 22,
  },

  titleDetailBeginStr: {
    fontSize: 36,
    color: '#E4AA5D',
    marginTop: -10,
  },

  titleDetailEndStr: {
    fontSize: 36,
    color: '#E4AA5D',
    marginTop: 20,
  },

  iconWraper: {
    width: 120,
    height: 120,
    marginTop: 40,
    position: 'relative',
  },

  iconRect: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  photo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  input: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    backgroundColor: STYLE_CONST.blackFontColor,
    marginTop: 43,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
  },

  genderWraper: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  genderBtn: {
    height: 63,
    width: 148,
    alignItems: 'center',
    justifyContent: 'center',
  },

  womenMan: {
    color: '#FFF',
    fontSize: 20,
  },

  womenMan_noSel: {
    color: '#ADADAD',
    fontSize: 20,
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
});
