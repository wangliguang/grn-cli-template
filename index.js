// @flow

import {AppRegistry} from 'react-native';
import App from './app/dva';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
