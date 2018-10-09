import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Novel from './components/Novel'
// import { HOME_SCREEN, CHAPTER_SCREEN } from '../../../navigation/routes'
import { getNovelChapters } from '../../services/api/chapterService'
// import { viewTracker } from '../../../config/analytics'

export class NovelScreen extends Component {
  // static navigatorStyle = {
  //   tabBarHidden: true
  // }
  static navigationOptions = {
    title: 'My Title',
    headerTitleStyle: {alignSelf: 'center', textAlign: 'center'},
  }
  state = {
    titles: []
  }
  componentDidMount = () => {
    // viewTracker(` Novel - ${this.props.novel.name}`)
    const { _id } = this.props.navigation.state.params.novel
    this.getChaptersTitle(_id)
  }

  getChaptersTitle = async (id) => {
    const titles = await getNovelChapters(id)
    this.setState({ titles })
  }

  goBack = () => this.props.navigation.goBack()

  navigateToChapter = chapterProps => {
    const { novel } = this.props.navigation.state.params
    this.props.navigation.navigate(
      'Chapter',
      {
        chapterProps,
        trackChapter: `${novel.name} - ${chapterProps.number}`,
        novelName: novel.name
      }
    )
  }

  render () {
    const { titles } = this.state
    const { novel } = this.props.navigation.state.params

    return (
      <Novel
        novel={novel}
        chaptersTitles={titles}
        goBack={this.goBack}
        navigateToChapter={this.navigateToChapter}
      />
    )
  }
}

export default NovelScreen
