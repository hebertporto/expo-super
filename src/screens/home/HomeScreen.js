import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Query } from 'react-apollo'
// import { viewTracker } from '../../../config/analytics'
import { ListNovels } from './components/ListNovels'
import { GET_NOVELS } from '../../graphql/Query'
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

  navigateToNovel = novel => {
    this.props.navigation.navigate('Novel', { novel })
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <ListNovels
  //         novels={this.state.novels}
  //         navigateToNovel={novel => this.navigateToNovel(novel)}
  //       />
  //     </View>
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
        <Query query={GET_NOVELS}>
          {({ data, loading }) => {
            if (loading) {
              return (
                <View>
                  <Text>Loading</Text>
                </View>
              )
            }
            return (
              <ListNovels
                novels={data.getNovels}
                navigateToNovel={novel => this.navigateToNovel(novel)}
              />
            )
          }}
        </Query>
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
