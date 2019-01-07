// @flow

import LifeCycleContainer from './LifeCycleContainer';

import LoginContainer from '../module/login';
import LaunchContainer from '../module/login/LaunchContainer';
import ChatContainer from '../module/chat';
import TabBarContainer from './TabBar';
import GuidanceContainer from '../module/login/GuidanceContainer';
import ModifyPersonInfoContainer from '../module/modifyPersonInfo/ModifyPersonInfoContainer';
import SelectGameContainer from '../module/selectGame/SelectGameContainer';


const ROUTEMAP = {}; // 用于注册的路由表
const CONTAINER = {}; // 用户跳转的路由名字常量

// 初始路由
const INITIAL_ROUTE_NAME = 'Launch';

CONTAINER.Launch = 'Launch';
ROUTEMAP.Launch = {
  screen: LifeCycleContainer(LaunchContainer),
  navigationOptions: {
    header: null,
  },
};

CONTAINER.Guidance = 'Guidance';
ROUTEMAP.Guidance = {
  screen: LifeCycleContainer(GuidanceContainer),
  navigationOptions: {
    header: null,
  },
};

CONTAINER.TabBar = 'TabBar';
ROUTEMAP.TabBar = {
  screen: TabBarContainer,
  navigationOptions: {
    header: null,
  },
};

CONTAINER.Login = 'Login';
ROUTEMAP.Login = {
  screen: LifeCycleContainer(LoginContainer),
  navigationOptions: {
    header: null,
  },
};

CONTAINER.Modify = 'Modify';
ROUTEMAP.Modify = {
  screen: LifeCycleContainer(ModifyPersonInfoContainer),
  navigationOptions: {
    header: null,
  },
};

CONTAINER.SelectGame = 'SelectGame';
ROUTEMAP.SelectGame = {
  screen: LifeCycleContainer(SelectGameContainer),
  navigationOptions: {
    header: null,
  },
};

CONTAINER.Chat = 'Chat';
ROUTEMAP.Chat = {
  screen: LifeCycleContainer(ChatContainer),
  navigationOptions: {
    header: null,
  },
};

export {
  INITIAL_ROUTE_NAME,
  ROUTEMAP,
  CONTAINER,
};


// import Chat from '../Module/Chat/WYIM/Chat';
// import ChatList from '../Module/Chat/WYIM/ChatList';
// import FriendList from '../Module/Chat/WYIM/FriendList';
// import FriendDetail from '../Module/Chat/WYIM/FriendDetail';
// import CreateTeam from '../Module/Chat/WYIM/CreateTeam';
// import NewFriend from '../Module/Chat/WYIM/NewFriend';
// import RemoveUsers from '../Module/Chat/WYIM/RemoveUsers';
// import SessionTeamDetail from '../Module/Chat/WYIM/SessionTeamDetail';
// import SessionUserDetail from '../Module/Chat/WYIM/SessionUserDetail';
// import SendAddFriend from '../Module/Chat/WYIM/SendAddFriend';
// import UpdateTeamName from '../Module/Chat/WYIM/UpdateTeamName';
// import SearchScreen from '../Module/Chat/WYIM/SearchScreen';
// import SelectUsers from '../Module/Chat/WYIM/SelectUsers';
// import LocationPicker from '../Module/Chat/WYIM/LocationPicker';
// import LocationView from '../Module/Chat/WYIM/LocationView';
