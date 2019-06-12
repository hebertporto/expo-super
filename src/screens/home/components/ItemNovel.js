import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { styles } from './styles/ItemNovel.style'

export const ItemNovel = ({ novel, navigateToNovel }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigateToNovel(novel)}
  >
    <View style={styles.imageContainer}>
      <Image source={{ uri: novel.coverUrl }} style={styles.image} />
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.title} numberOfLines={2}>
        {novel.name}
      </Text>
      <View style={styles.updateContainer}>
        <Text numberOfLines={1}>
          {novel.chapters[0].number} - {novel.chapters[0].title}
        </Text>
        <Text>
          <FontAwesome
            name="calendar"
            size={14}
            iconStyle={{ marginRight: 15 }}
          />
          {moment().format('DD-MM-YYYY')}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)

ItemNovel.propTypes = {
  novel: PropTypes.object,
  navigateToNovel: PropTypes.func.isRequired
}
