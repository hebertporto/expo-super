import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import AppNavigator from './src/navigation/AppNavigator'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import AppProviders from './src/context'

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'https://graphql-supernovel.herokuapp.com/graphql'
//   })
// })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://10.0.3.2:4000/graphql' })
})

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
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <AppProviders>
              <View style={styles.container}>
                <AppNavigator />
              </View>
            </AppProviders>
          </ApolloHooksProvider>
        </ApolloProvider>
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
