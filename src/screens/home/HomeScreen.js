import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

// import { viewTracker } from '../../../config/analytics'
import { ListNovels } from './components/ListNovels'

import { getAllNovels } from '../../services/api/novelService'
// import { NOVEL_SCREEN } from '../../../navigation/routes'

export class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Super Novel Reader'
  }

  state = {
    novels: []
  }
  componentDidMount = () => {
    // viewTracker('HomeScreen')
    this.fetchNovels()
  }

  fetchNovels = async () => {
    const novels = await getAllNovels()
    this.setState({ novels })
  }

  navigateToNovel = (novel) => {
    this.props.navigation.navigate('Novel', { novel })
  }

  render () {
    return (
      <View style={styles.container}>
        <ListNovels
          novels={this.state.novels}
          navigateToNovel={(novel) => this.navigateToNovel(novel)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeScreen
