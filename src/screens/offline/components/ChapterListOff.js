import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { ChapterRowOff } from './ChapterRowOff'

function ChapterListOff({ chapters }) {
  const renderRow = ({ item }) => <ChapterRowOff chapter={item} />
  const keyExtractor = item => item.id
  if (chapters.length) {
    return (
      <FlatList
        data={chapters}
        numColumns={1}
        renderItem={renderRow}
        keyExtractor={keyExtractor}
      />
    )
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ fontFamily: 'helvetica', fontSize: 20, letterSpacing: 1.2 }}
      >
        Nenhum capítulo salvo.
      </Text>
      <Text
        style={{ fontFamily: 'helvetica', fontSize: 20, letterSpacing: 1.2 }}
      >
        0/5
      </Text>
    </View>
  )
}

export { ChapterListOff }
