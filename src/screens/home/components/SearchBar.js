import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

class SearchBarContainer extends Component {
  render() {
    return (
      <View>
        <Text>
          Search
        </Text>
      </View>
    )
  }
}

SearchBarContainer.propTypes = {
  novelName: PropTypes.string
}

export const SearchBar = SearchBarContainer
