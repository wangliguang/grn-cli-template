// @flow

import {
  StyleSheet,
} from 'react-native';
import { STYLE_CONST } from 'const';

export default StyleSheet.create({
  content: {
    width: STYLE_CONST.screenW,
    height: '100%',
    paddingHorizontal: 16,
  },

  personInfoShadow: {
    backgroundColor: '#242424',
    borderRadius: 20,
    paddingBottom: 4,
  },

  personInfo: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  nickNameGender: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 24,
  },

  nickName: {
    color: STYLE_CONST.blackFontColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 6,
  },
  gender: {
    width: 20,
    height: 20,
    backgroundColor: '#B2DBFF',
    borderRadius: 10,
  },

  tagWraper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 28,
  },

  tag: {
    marginRight: 8,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 9,
    borderRadius: 14,
  },

  linkWraper: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  link: {
    marginTop: -12,
    width: 10,
    height: 36,
  },

  gameInfo: {
    marginTop: -12,
    paddingTop: 28,
    zIndex: -100,
  },

  gameInfoTitle: {
    color: '#242424',
    fontSize: 13,
    fontWeight: 'bold',
  },

  gameIdIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  gameId: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  gameIdTopTitle: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 9,
    fontSize: 13,
    overflow: 'hidden',
    marginRight: 8,
  },
  gameIdTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  gameIdTopContent: {
    color: STYLE_CONST.blackFontColor,
    fontSize: 14,
  },

  gameIcon: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    borderBottomRightRadius: 12,
    paddingRight: 4,
    paddingBottom: 4,
    overflow: 'hidden',
  },
  icon: {
    borderRadius: 12,
  },

  addFriendWraper: {
    marginTop: 22,
  },

  addFriendTitle: {
    color: STYLE_CONST.blackFontColor,
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  addFriendContent: {
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    borderTopLeftRadius: 5,
    marginBottom: 12,
    padding: 8,
    overflow: 'hidden',
    fontSize: 14,
    color: '#858585',
  },

  otherGame: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
  },

  otherGameTitle: {
    color: '#ADADAD',
    fontSize: 13,
    marginRight: 12,
  },

  otherGameName: {
    marginLeft: 8,
    fontSize: 12,
    color: '#858585',
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: '#E8E8E8',
    borderRadius: 14,
    overflow: 'hidden',
  },
});
