import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import { Colors } from '../constants/Colors'

import { HomeScreen } from '../screens/home/HomeScreen'
import NovelScreen from '../screens/novel/NovelScreen'
import ChapterScreen from '../screens/novel/ChapterScreen'
import OfflineScreen from '../screens/offline/OfflineScreen'
import BookmarkScreen from '../screens/bookmark/BookmarkScreen'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.navbarBackground
  },
  headerTintColor: '#fff'
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Super Novel Reader',
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1
        }
      })
    },
    Novel: NovelScreen,
    Chapter: ChapterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions
  }
)

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
  )
}

const OfflineStack = createStackNavigator(
  {
    Offline: OfflineScreen
  },
  {
    initialRouteName: 'Offline',
    defaultNavigationOptions
  }
)

OfflineStack.navigationOptions = {
  tabBarLabel: 'Offline',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-download` : `md-download`}
    />
  )
}

const BookmarkStack = createStackNavigator(
  {
    Bookmark: BookmarkScreen
  },
  {
    initialRouteName: 'Bookmark',
    defaultNavigationOptions
  }
)

BookmarkStack.navigationOptions = {
  tabBarLabel: 'Bookmark',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-star${focused ? '' : '-outline'}`
          : 'md-star'
      }
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  BookmarkStack,
  OfflineStack
})
