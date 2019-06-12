import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { viewTracker } from '../../../config/analytics'
import { ListNovels } from './components/ListNovels'
import { GET_NOVELS } from '../../graphql/Query'
import { useQuery } from 'react-apollo-hooks'
import { LoadingOrError } from '../../components/LoadingOrError'

const HomeScreen = ({ navigation }) => {
  const { data, error, loading } = useQuery(GET_NOVELS)

  if (loading || error) {
    return <LoadingOrError loading={loading} error={error} />
  }
  return (
    <View style={styles.container}>
      <ListNovels
        novels={data.getNovels}
        navigateToNovel={novel => navigation.navigate('Novel', { novel })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export { HomeScreen }
