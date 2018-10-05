import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import { ItemNovel } from './ItemNovel'

class ListNovelsContainer extends Component {
  renderNovel = ({ item }) => <ItemNovel novel={item} navigateToNovel={this.props.navigateToNovel} />
  keyExtractor = item => item._id.toString()
  render() {
    return (
      <FlatList
        data={this.props.novels}
        numColumns={3}
        renderItem={this.renderNovel}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

ListNovelsContainer.propTypes = {
  novels: PropTypes.array
}

export const ListNovels = ListNovelsContainer
