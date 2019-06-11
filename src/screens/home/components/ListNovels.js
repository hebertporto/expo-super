import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { ItemNovel } from './ItemNovel'

ListNovelsContainer = ({ novels, navigateToNovel }) => {
  const renderNovel = ({ item }) => (
    <ItemNovel novel={item} navigateToNovel={navigateToNovel} />
  )

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
  novels: PropTypes.array,
  navigateToNovel: PropTypes.func.isRequired
}

export const ListNovels = ListNovelsContainer
