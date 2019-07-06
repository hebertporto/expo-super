import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { FontAwesome } from '@expo/vector-icons'
import { styles } from '../../novel/components/styles/ItemChapter.style'
import { withNavigation } from 'react-navigation'

const checkDate = chapterDate => {
  const today = parseInt(moment(new Date()).format('YYYYMMDD'), 10)
  const date = parseInt(moment(chapterDate).format('YYYYMMDD'), 10)
  if (today - date < 30) {
    return moment(chapterDate)
      .startOf('hour')
      .fromNow()
  }
  return moment(chapterDate).format('DD/MM/YYYY')
}

function rowChapter({ chapter, navigation }) {
  const { title, number, novel, createdAt } = chapter
  const goChapter = () =>
    navigation.navigate('ChapterOff', {
      chapter: chapter,
      trackChapter: `${novel.name} - ${chapter.number}`,
      screenTitle: novel.name,
      screenSubTitle: `${chapter.number} - ${chapter.title}`
    })
  return (
    <TouchableOpacity onPress={goChapter}>
      <View style={styles.root}>
        <View style={styles.containerNumber}>
          <Text style={styles.numberText}>{number}</Text>
        </View>
        <View style={styles.containerTitle}>
          <Text numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.containerDate}>
          <FontAwesome name="calendar" size={14} />
          <Text style={styles.dateText}>
            {checkDate(parseFloat(createdAt))}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const ChapterRowOff = withNavigation(rowChapter)
