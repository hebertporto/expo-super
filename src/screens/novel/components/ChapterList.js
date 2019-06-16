import React from 'react'
import { FlatList } from 'react-native'
import { ChapterRow } from './ChapterItemsList'

function ChapterList({ chapters }) {
  const renderRow = ({ item }) => <ChapterRow chapter={item} />
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

export { ChapterList }
