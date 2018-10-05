import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import { OfflineScreen } from '../screens/offline/OfflineScreen';

import MainTabNavigator from './MainTabNavigator';

const Offiline = createStackNavigator({
  Offline: OfflineScreen,
});

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Offline: Offiline
});