import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { viewTracker } from '../../../config/analytics'
import { ListNovels } from './components/ListNovels'
import { NOVELS_QUERY } from '../../graphql/Query'
import { useQuery } from 'react-apollo-hooks'
import { LoadingOrError } from '../../components/LoadingOrError'

const HomeScreen = () => {
  const {
    data: { novels },
    error,
    loading
  } = useQuery(NOVELS_QUERY)
  return loading || error ? (
    <LoadingOrError loading={loading} error={error} />
  ) : (
    <View style={styles.container}>
      <ListNovels novels={novels} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export { HomeScreen }
