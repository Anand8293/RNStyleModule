/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StyleCollection from './src/components/StyleDemo';
import ListViews from './src/components/ListViews';

AppRegistry.registerComponent(appName, () => ListViews);
