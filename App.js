import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import AppNavigator from './src/navigation/AppNavigator'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./src/assets/images/robot-dev.png'),
        require('./src/assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        kefa: require('./src/assets/fonts/kefa.ttf'),
        'alegreya-bold': require('./src/assets/fonts/Alegreya-Bold.ttf'),
        'alegreya-italic': require('./src/assets/fonts/Alegreya-Italic.ttf'),
        helvetica: require('./src/assets/fonts/HELR45W.ttf')
      })
    ])
  }

  handleLoadingError = error => console.warn(error)

  handleFinishLoading = () => this.setState({ isLoadingComplete: true })

  render() {
    if (this.state.isLoadingComplete) {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      )
    }
    return (
      <AppLoading
        startAsync={this.loadResourcesAsync}
        onError={this.handleLoadingError}
        onFinish={this.handleFinishLoading}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
