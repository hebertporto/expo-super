import React from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons as Icon } from '@expo/vector-icons'
import { ChapterList } from './ChapterList'
import { AdBanner } from '../../../components/AdBanner'
import { styles } from './styles/Novel.style.js'

function Novel({ novel, chapters }) {
  const { translationTeam, author } = novel
  return (
    <View style={styles.root}>
      <View style={styles.imageSection} />
      <View style={styles.infoSection}>
        <View style={styles.labelInfo}>
          <Icon name="account-circle" size={18} />
          <Text style={styles.label} numberOfLines={1}>
            {author}
          </Text>
        </View>
        <View style={styles.labelInfo}>
          <Icon name="translate" size={18} />
          <Text style={styles.label} numberOfLines={1}>
            {translationTeam}
          </Text>
        </View>
      </View>
      <View style={styles.adsSection}>
        <AdBanner adUnitID="ca-app-pub-6359223928074410/8950647970" />
      </View>
      <View style={styles.listSection}>
        <ChapterList chapters={chapters} />
      </View>
    </View>
  )
}

export { Novel }
