import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function CustomHeader({ title, subtitle }) {
  return (
    <View style={styles.header}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    width: '70%'
  }
})

export { CustomHeader }
