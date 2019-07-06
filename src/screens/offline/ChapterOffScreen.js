import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import { styles } from './components/styles/ChapterOff.style'
import { removeChapter } from '../../services/app/offlineChapterService'

function ChapterOffScreen({ navigation }) {
  const { chapter } = navigation.state.params
  const { content, translators, revisors } = chapter

  handleButtonRemove = async () => {
    const { id } = chapter
    await removeChapter(id)
    navigation.push('')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
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
              <TouchableOpacity onPress={this.handleButtonRemove}>
                <IconFont name="remove" size={36} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.textChapter}>{content}</Text>
          <Text style={styles.textNoticeEndOfChapter}>- Fim do Capítulo -</Text>
          <Text style={styles.textNoticeEndOfChapter}>
            Obrigado por ler com a Super Novel Reader !
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}

export { ChapterOffScreen }
