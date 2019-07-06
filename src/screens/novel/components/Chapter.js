import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles/Chapter.style'
import { AdBanner } from '../../../components/AdBanner'
import {
  canBeSaved,
  removeChapter,
  saveChapter
} from '../../../services/app/offlineChapterService'

class Chapter extends React.Component {
  state = {
    isSaveEnable: 1
  }

  componentDidMount() {
    this.isSaveEnable(this.props.chapter.id)
  }

  isSaveEnable = async () => {
    const { id } = this.props.chapter
    const isSaveEnable = await canBeSaved(id)
    this.setState({ isSaveEnable })
  }

  handleButtonSave = async () => {
    const { chapter } = this.props
    await saveChapter(chapter)
    this.isSaveEnable(chapter.id)
  }

  handleButtonRemove = async () => {
    const { id } = this.props.chapter
    await removeChapter(id)
    this.isSaveEnable(id)
  }

  renderSaveOptions = () => {
    const { isSaveEnable } = this.state
    switch (isSaveEnable) {
      case 1:
        return (
          <TouchableOpacity onPress={this.handleButtonSave}>
            <IconFont name="download" size={36} />
          </TouchableOpacity>
        )
      case 2:
        return (
          <TouchableOpacity onPress={this.handleButtonRemove}>
            <IconFont name="remove" size={36} />
          </TouchableOpacity>
        )
      default:
        return (
          <View>
            <Text>Máximo limite de capítulos</Text>
          </View>
        )
    }
  }

  render() {
    const { content, translators, revisors } = this.props.chapter
    return (
      <View style={styles.mainContainer}>
        <View style={styles.adContainer}>
          <AdBanner adUnitID="ca-app-pub-8356555649836141/6095712364" />
        </View>

        <View style={{ flex: 0.7 }}>
          <ScrollView>
            <View style={styles.headerContainer}>
              <View style={{ flex: 0.7 }}>
                <View style={styles.iconWithText}>
                  <Icon name="closed-caption" size={22} style={styles.icon} />
                  <Text numberOfLines={1} style={styles.textAuthor}>
                    {translators}
                  </Text>
                </View>
                <View style={styles.iconWithText}>
                  <Icon name="spellcheck" size={22} style={styles.icon} />
                  <Text numberOfLines={1} style={styles.textAuthor}>
                    {revisors}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {/* {this.renderSaveOptions()} */}
              </View>
            </View>
            <Text style={styles.textChapter}>{content}</Text>
            <Text style={styles.textNoticeEndOfChapter}>
              - Fim do Capítulo -
            </Text>
            <Text style={styles.textNoticeEndOfChapter}>
              Obrigado por ler com a Super Novel Reader !
            </Text>
          </ScrollView>
        </View>

        <View style={styles.adContainer}>
          <AdBanner adUnitID="ca-app-pub-8356555649836141/4361271948" />
        </View>
      </View>
    )
  }
}

export { Chapter }
