import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/ItemNovel.style'

export const ItemNovel = props => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.navigateToNovel(props.novel)}>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: props.novel.cover_url }}
        style={styles.image}
      />
    </View>
    <View style={styles.textContainer}>
      <Text
        style={styles.title}
        numberOfLines={2}
      >
        {props.novel.name}
      </Text>
    </View>
  </TouchableOpacity>
)

ItemNovel.propTypes = {
  novel: PropTypes.object
}
