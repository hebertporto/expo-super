import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { getAll } from '../../services/app/offlineChapterService'
import { ChapterListOff } from './components/ChapterListOff'
import { NavigationEvents } from 'react-navigation'

function OfflineScreen() {
  const [chapters, setChapters] = useState([])
  const getAllChapters = async () => {
    const chapters = await getAll()
    setChapters(chapters)
  }

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={getAllChapters} />
      <ChapterListOff chapters={chapters} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingTop: 80,
    fontSize: 22
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5,
    paddingHorizontal: 40
  }
})

export { OfflineScreen }
