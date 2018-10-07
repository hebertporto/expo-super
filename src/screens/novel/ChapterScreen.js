import React, { Component } from 'react'
import Chapter from '../components/Chapter'
import { getChapterById } from '../../../services/backend/novelService'
import { viewTracker } from '../../../config/analytics'
import { saveChapter } from '../../../services/app/offlineChapterService'

class ChapterContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  }

  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../../../assets/icons/star.png'),
        id: 'save'
      }
    ]
  }

  state = {
    chapter: {}
  }

  componentDidMount() {
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    viewTracker(this.props.trackChapter)
    const { chapterProps } = this.props
    this.getChapter(chapterProps._id)
  }

  onNavigatorEvent = async (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'save') {
        const offlineChapter = {
          novel: this.props.novelName,
          ...this.state.chapter
        }
        await saveChapter(offlineChapter)
        console.log('chapter', offlineChapter)
      }
    }
  }

  getChapter = async (id) => {
    const chapter = await getChapterById(id)
    this.setState({chapter})
  }
  render () {
    const { chapter } = this.state
    return (
      <Chapter
        chapter={chapter}
      />
    )
  }
}

export const ChapterScreen = ChapterContainer
