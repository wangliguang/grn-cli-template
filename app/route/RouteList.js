// @flow

import LifeCycleContainer from './LifeCycleContainer';

import TabBarContainer from './TabBar';

const ROUTEMAP = {}; // 用于注册的路由表
const CONTAINER = {}; // 用户跳转的路由名字常量

// 初始路由
const INITIAL_ROUTE_NAME = 'TabBar';


CONTAINER.TabBar = 'TabBar';
ROUTEMAP.TabBar = {
  screen: TabBarContainer,
  navigationOptions: {
    header: null,
  },
};


export {
  INITIAL_ROUTE_NAME,
  ROUTEMAP,
  CONTAINER,
};
