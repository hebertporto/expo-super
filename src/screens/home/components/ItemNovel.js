import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import { styles } from './styles/ItemNovel.style'

const Item = ({ novel, navigation }) => {
  const { name, coverUrl, lastChapter } = novel
  const { number, title, createdAt } = lastChapter
  const navigate = () =>
    navigation.navigate('Novel', { novel, screenTitle: novel.name })
  return (
    <TouchableOpacity style={styles.container} onPress={navigate}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: coverUrl }} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.updateContainer}>
          <Text numberOfLines={1}>
            {number} - {title}
          </Text>
          <Text>
            <FontAwesome name="calendar" size={14} />
            {`  ${moment(parseInt(createdAt, 10)).format('DD/MM/YYYY')}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const ItemNovel = withNavigation(Item)

export { ItemNovel }

ItemNovel.propTypes = {
  novel: PropTypes.object.isRequired
}
