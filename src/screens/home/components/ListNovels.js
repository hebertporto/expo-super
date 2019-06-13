import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { ItemNovel } from './ItemNovel'

ListNovelsContainer = ({ novels }) => {
  const renderNovel = ({ item }) => <ItemNovel novel={item} />
  const keyExtractor = item => item.id
  return (
    <FlatList
      data={novels}
      numColumns={2}
      renderItem={renderNovel}
      keyExtractor={keyExtractor}
    />
  )
}

ListNovelsContainer.propTypes = {
  novels: PropTypes.array
}

export const ListNovels = ListNovelsContainer
