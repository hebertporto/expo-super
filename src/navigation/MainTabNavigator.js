import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import { CustomHeader } from './components/CustomHeader'
import { Colors } from '../constants/Colors'
import { get } from 'lodash'
import { HomeScreen } from '../screens/home/HomeScreen'
import { NovelScreen } from '../screens/novel/NovelScreen'
import { ChapterScreen } from '../screens/novel/ChapterScreen'
import { OfflineScreen } from '../screens/offline/OfflineScreen'
import { ChapterOffScreen } from '../screens/offline/ChapterOffScreen'
import { BookmarkScreen } from '../screens/bookmark/BookmarkScreen'

const getScreenTitle = nav => get(nav, 'state.params.screenTitle', '')

const getScreenSubTitle = nav => get(nav, 'state.params.screenSubTitle', '')

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.navbarBackground
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1
  },
  headerTitleContainerStyle: {
    left: 0
  }
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Super Novel Reader'
      }
    },
    Novel: {
      screen: NovelScreen,
      navigationOptions: ({ navigation }) => ({
        title: getScreenTitle(navigation)
      })
    },
    Chapter: {
      screen: ChapterScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <CustomHeader
            title={getScreenTitle(navigation)}
            subtitle={getScreenSubTitle(navigation)}
          />
        )
      })
    }
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
    Offline: OfflineScreen,
    ChapterOff: {
      screen: ChapterOffScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <CustomHeader
            title={getScreenTitle(navigation)}
            subtitle={getScreenSubTitle(navigation)}
          />
        )
      })
    }
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
  OfflineStack
  // BookmarkStack
})
