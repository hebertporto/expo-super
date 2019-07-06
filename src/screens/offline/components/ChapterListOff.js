import React from 'react'
import { FlatList } from 'react-native'
import { ChapterRowOff } from './ChapterRowOff'

function ChapterListOff({ chapters }) {
  const renderRow = ({ item }) => <ChapterRowOff chapter={item} />
  const keyExtractor = item => item.id
  return (
    <FlatList
      data={chapters}
      numColumns={1}
      renderItem={renderRow}
      keyExtractor={keyExtractor}
    />
  )
}

export { ChapterListOff }
