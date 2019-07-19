import React from 'react'
import { useQuery } from 'react-apollo-hooks'
// import { viewTracker } from '../../../config/analytics'
import { ListNovels } from './components/ListNovels'
import { NOVELS_QUERY } from '../../graphql/Query'
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
    <ListNovels novels={novels} />
  )
}

export { HomeScreen }
