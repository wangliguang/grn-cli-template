// @flow

import {
  StyleSheet,
} from 'react-native';
import { STYLE_CONST } from 'const';


export default StyleSheet.create({
  content: {
  },
  homePageBg: {
    width: '100%',
    height: '100%',
  },
  homePageHeader: {
    width: '100%',
    height: STYLE_CONST.isIphoneX ? 105 : 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderColor: STYLE_CONST.blackFontColor,
    borderWidth: 2,
  },
  headerTitle: {
    color: STYLE_CONST.blackFontColor,
    fontSize: 18,
    fontWeight: '800',
  },

  personCard: {
    height: '100%',
    marginTop: 65,
    marginBottom: 100,
    backgroundColor: 'transparent',
  },

  contentScroll: {
  },

  recommandUserIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 16,
  },
  scrollIcon: {
    marginTop: 102,
    left: 0,
    right: 0,
    paddingLeft: 30,
    zIndex: 100,
    position: 'absolute',

  },

});
