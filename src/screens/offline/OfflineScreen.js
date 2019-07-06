import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { getAll } from '../../services/app/offlineChapterService'
import { ChapterListOff } from './components/ChapterListOff'

function OfflineScreen({ navigation }) {
  console.log('navigation: ', navigation.state.key)
  const [chapters, setChapters] = useState([])

  useEffect(() => {
    console.log('rodou effect')
    const getAllChapters = async () => {
      const chapters = await getAll()
      setChapters(chapters)
    }
    getAllChapters()
  }, [])

  return (
    <View style={styles.container}>
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
