import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles/ItemNovel.style'

export const ItemNovel = ({ novel, navigateToNovel }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigateToNovel(novel)}
  >
    <View style={styles.imageContainer}>
      <Image source={{ uri: novel.coverUrl }} style={styles.image} />
      <View
        style={{
          position: 'absolute',
          height: 43,
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          opacity: 0.4
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {novel.name}
        </Text>
      </View>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title} numberOfLines={1}>
        {novel.chapters[0].number} - {novel.chapters[0].title}
      </Text>
      <Text>
        {' '}
        {moment(new Date(novel.chapters[0].createdAt)).format('DD-MM-YYYY')}
      </Text>
    </View>
  </TouchableOpacity>
)

ItemNovel.propTypes = {
  novel: PropTypes.object,
  navigateToNovel: PropTypes.func.isRequired
}
