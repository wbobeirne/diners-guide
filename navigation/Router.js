import { createRouter } from '@expo/ex-navigation';

import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  map: () => MapScreen,
  list: () => ListScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
