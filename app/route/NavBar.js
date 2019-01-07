import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  registerNavigator,
  unRegisterNavigator,
} from './index';
// TODO: 如果将 import ~ /RouteList 放到 import ~ /index之前,在./index中就无法获取到Routelist的内容
import * as RouteList from './RouteList';

// 注册导航
const AppNavigator = createStackNavigator(RouteList.ROUTEMAP, {
  initialRouteName: RouteList.INITIAL_ROUTE_NAME, // 默认显示界面
  mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});

class App extends React.Component {
  componentDidMount() {
    registerNavigator(this.navigator);
  }

  componentWillUnmount() {
    unRegisterNavigator();
  }

  render() {
    return (
      <AppNavigator
        ref={(nav) => { this.navigator = nav; }}
      />
    );
  }
}
export default App;
