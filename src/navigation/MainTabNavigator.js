import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

// import HomeScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/home/HomeScreen';
import NovelScreen from '../screens/novel/NovelScreen';

import OfflineScreen from '../screens/offline/OfflineScreen';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Novel: NovelScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '-box' : ''}`
          : `md-list${focused ? '-box' : ''}`
      }
    />
  ),
};

const OfflineStack = createStackNavigator({
  Offline: OfflineScreen,
});

OfflineStack.navigationOptions = {
  tabBarLabel: 'Offline',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-download`
        : `md-download`}
    />
  ),
};

const BookmarkStack = createStackNavigator({
  Bookmark: BookmarkScreen,
});

BookmarkStack.navigationOptions = {
  tabBarLabel: 'Bookmark',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-star${focused ? ''
        : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  BookmarkStack,
  OfflineStack,
});
