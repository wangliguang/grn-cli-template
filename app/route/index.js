/* eslint-disable no-underscore-dangle */
import { StackActions, NavigationActions } from 'react-navigation';
import { CONTAINER } from './RouteList';

let navigator = null;

const jump = (routeName: string, params: Object) => {
  navigator._navigation.push(routeName, params);
};

const back = () => {
  navigator._navigation.pop();
};

function popToTop() {
  navigator._navigation.popToTop();
}

function reset(routeName: string) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName }),
    ],
  });
  navigator.dispatch(resetAction);
}

function popToN(n: number) {
  if (n <= 0) return;
  const { routes } = navigator._navigation.state;
  const len = routes.length;
  if (len < n || n === len - 1) {
    popToTop();
    return;
  }
  navigator._navigation.goBack(routes[len - n].key);
}

function popToRouter(routeName: string) {
  if (!routeName) {
    back();
    return;
  }
  const { routes } = navigator._navigation.state;
  const len = routes.length;
  for (let i = 0; i < len - 1; i += 1) {
    const route = routes[i];
    if (routeName === route.routeName && i !== len - 1) {
      navigator._navigation.goBack(routes[i + 1].key);
      return;
    }
  }
}

function registerNavigator(mNavigator: Object) {
  if (navigator) return;
  navigator = mNavigator;
}

function unRegisterNavigator() {
  if (!navigator) return;
  navigator = null;
}

export {
  reset,
  popToTop, // 返回顶层
  popToN, // 返回第n个页面
  popToRouter, // 返回到指定页面(routeName页面必须在当前路由栈中)
  jump,
  back,
  CONTAINER,
  registerNavigator,
  unRegisterNavigator,
};

/* eslint-enable no-underscore-dangle */
