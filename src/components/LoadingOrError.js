import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const LoadingOrError = ({ loading, error }) => {
  if (error && !loading) {
    return (
      <View style={styles.root}>
        <LottieView
          source={require('../assets/animations/error.json')}
          autoPlay
          loop
        />
      </View>
    )
  }
  return (
    <View style={styles.root}>
      <LottieView
        source={require('../assets/animations/booking.json')}
        autoPlay
        loop
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { LoadingOrError }
