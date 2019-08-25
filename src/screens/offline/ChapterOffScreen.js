import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import { styles } from './components/styles/ChapterOff.style'
import {
  removeChapter,
  saveChapter,
  canBeSaved
} from '../../services/app/offlineChapterService'

function ChapterOffScreen({ navigation }) {
  const { chapter } = navigation.state.params
  const { content, translators, revisors } = chapter
  const [isSaveEnable, setIsSaveEnable] = useState(2)

  const checkIsSaveEnable = async () => {
    const { id } = chapter
    const isSaveEnable = await canBeSaved(id)
    setIsSaveEnable(isSaveEnable)
  }

  const handleButtonRemove = async () => {
    const { id } = chapter
    await removeChapter(id)
    await checkIsSaveEnable()
  }

  const handleButtonSave = async () => {
    await saveChapter(chapter)
    await checkIsSaveEnable()
  }

  const renderSaveOptions = () => {
    switch (isSaveEnable) {
      case 1:
        return (
          <TouchableOpacity
            onPress={handleButtonSave}
            style={{ alignContent: 'center' }}
          >
            <Text style={{ textAlign: 'center' }}>Salvar Capítulo</Text>
            <IconFont
              style={{ alignSelf: 'center' }}
              name="download"
              size={36}
            />
          </TouchableOpacity>
        )
      case 2:
        return (
          <TouchableOpacity onPress={handleButtonRemove}>
            <Text style={{ textAlign: 'center' }}>Remover Capítulo</Text>
            <IconFont style={{ alignSelf: 'center' }} name="remove" size={36} />
          </TouchableOpacity>
        )
      default:
        return (
          <View>
            <Text style={{ textAlign: 'center' }}>Capítulos Salvos</Text>
            <Text style={{ textAlign: 'center' }}>5 / 5</Text>
          </View>
        )
    }
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
              {renderSaveOptions()}
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
