import React, { Component } from 'react'
import { FlatList } from 'react-native'
import {ChapterListRow, ChapterListFooter} from './ChapterItemsList'
// import VideoReward from '../../shared/components/VideoAd'

class ChapterList extends Component {
  state = {
    adVideo: false
  }
  renderRow = (data) => {
    const { item, index } = data
    return <ChapterListRow
      chapter={item}
      protected={index % 2 === 0}
      navigateToChapter={this.props.navigateToChapter}
    />
  }
  hideVideoButton = () => this.setState({adVideo: true})
  renderFooter = () => <ChapterListFooter />
  // renderHeader = () => <VideoReward showButton={this.state.adVideo} />
  keyExtractor = item => item._id.toString()

  render () {
    return (
      <FlatList
        data={this.props.chapters}
        numColumns={1}
        renderItem={this.renderRow}
        keyExtractor={this.keyExtractor}
        // ListHeaderComponent={this.renderHeader}
        // ListFooterComponent={this.renderFooter}
      />
    )
  }
}

export default ChapterList
