import React from 'react'
import { View, Text, ScrollView } from 'react-native'
// import AdBanner from '../../shared/components/AdBanner'
// import AdBannerTop from '../../shared/components/AdBannerTop'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles/Chapter.style'
import { AdBanner } from '../../../components/AdBanner'

const Chapter = props => {
  const { content, translators, revisors, title, number } = props.chapter
  return (
    <View style={styles.mainContainer}>
      <View style={styles.adContainer}>
        <AdBanner adUnitID="ca-app-pub-8356555649836141/6095712364" />
      </View>

      <View style={{ flex: 0.8 }}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.iconWithText}>
              <Icon name="closed-caption" size={18} color="#717171" />
              <Text>{translators}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon name="spellcheck" size={18} color="#717171" />
              <Text>{revisors}</Text>
            </View>
          </View>
          <Text style={styles.textChapter}>{content}</Text>
          <Text style={styles.textNoticeEndOfChapter}>- Fim do Capítulo -</Text>
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

export { Chapter }
