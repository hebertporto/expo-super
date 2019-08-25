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

const getScreenTitle = nav => get(nav, 'state.params.screenTitle', '')

const getScreenSubTitle = nav => get(nav, 'state.params.screenSubTitle', '')

const getRouterName = nav => nav.state.routes[nav.state.index].routeName

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.navbarBackground
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    letterSpacing: 1,
    fontFamily: 'helvetica'
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
        title: 'Super Novel Reader',
        tabBarVisible: false
      }
    },
    Novel: {
      screen: NovelScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <CustomHeader title={getScreenTitle(navigation)} />
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

HomeStack.navigationOptions = ({ navigation }) => {
  const routeName = getRouterName(navigation)
  const tabBarVisible = routeName === 'Home'

  return {
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
    tabBarVisible
  }
}

const OfflineStack = createStackNavigator(
  {
    Offline: {
      screen: OfflineScreen,
      navigationOptions: {
        title: 'Offline'
      }
    },
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

export default createBottomTabNavigator({
  HomeStack,
  OfflineStack
})
