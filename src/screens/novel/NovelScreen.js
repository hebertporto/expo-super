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
  // static navigationOptions = {
  //   title: 'My Title',
  //   headerTitleStyle: {alignSelf: 'center'},
  // }
  state = {
    titles: []
  }
  componentDidMount = () => {
    // viewTracker(` Novel - ${this.props.novel.name}`)
    const { _id } = this.props.novel
    this.getChaptersTitle(_id)
  }

  getChaptersTitle = async (id) => {
    const titles = await getNovelChapters(id)
    this.setState({ titles })
  }

  goBack = () => this.props.navigator.goBack()

  navigateToChapter = (chapterProps) => {
    console.log('chapter')
    // this.props.navigator.navigate(
    //   'Chapter',
    //   {
    //     chapterProps,
    //     trackChapter: `${this.props.novel.name} - ${chapterProps.number}`,
    //     novelName: this.props.novel.name
    //   }
    //   // title: this.props.novel.name,
    //   // subtitle: `${chapterProps.number} - ${chapterProps.title}`
    // )
  }

  render () {
    const { titles } = this.state
    return (
      <View>
        <Text>Novel</Text>
      </View>
    )
    // return (
    //   <Novel
    //     novel={this.props.novel}
    //     chaptersTitles={titles}
    //     goBack={this.goBack}
    //     navigateToChapter={this.navigateToChapter}
    //   />
    // )
  }
}

export default NovelScreen
