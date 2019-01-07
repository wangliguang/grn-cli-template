import {
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react';
import {
  Image,
} from 'react-native';
import { STYLE_CONST } from 'const';
import IMG from '../img';


import HomePageContainer from '../module/homePage';
import ChatContainer from '../module/chat';
import DiscoverContainer from '../module/discover';

const TabOptions = (tabBarTitle, normalImage, selectedImage, index) => {
  const tabBarLabel = tabBarTitle;
  const tabBarIcon = (({ focused }: Boolean) => (
    <Image
      source={!focused ? normalImage : selectedImage}
      style={index !== 1 ? { height: 44, width: 43 } : { height: 66, width: 66 }}
    />
  ));
  const tabBarVisible = true;
  const tabBarOnPress = ({ defaultHandler }) => {
    // defaultHandler是默认的切换tab行为
    defaultHandler();
  };

  return {
    tabBarLabel,
    tabBarIcon,
    tabBarVisible,
    tabBarOnPress,
  };
};
/* eslint-enable */

const TabBar = createBottomTabNavigator({
  Discover: {
    screen: DiscoverContainer,
    navigationOptions: () => TabOptions(
      ' ',
      IMG.homeNor,
      IMG.homeSel,
      0,
    ),
  },
  HomePage: {
    screen: HomePageContainer,
    navigationOptions: () => TabOptions(
      ' ',
      IMG.loveNor,
      IMG.loveSel,
      1,
    ),
  },
  Chat: {
    screen: ChatContainer,
    navigationOptions: () => TabOptions(
      ' ',
      IMG.chatNor,
      IMG.chatSel,
      2,
    ),
  },
}, {
  initialRouteName: 'HomePage',
  backBehavior: 'none', // initialRoute
  tabBarOptions: {
    activeTintColor: 'rgb(2, 176, 139)',
    inactiveTintColor: 'rgb(170, 170, 170)',
    showLabel: true, // 是否显示label，默认开启。
    showIcon: true, // 是否显示图标，默认关闭。
    labelStyle: {
      fontFamily: null,
    },
    tabStyle: {
    },
    style: {
      // 坑： 当时直接使用透明，底色一直是白色，后来发现其实TabBar已经是透明了，显示出来的是根试图的颜色， 最后使用绝对定时脱离标准文档流即可
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      height: 100,
      position: 'absolute',
      bottom: 0,
      width: STYLE_CONST.screenW,
    },
  },
});

export default TabBar;
