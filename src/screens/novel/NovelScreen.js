import React from 'react'
import { NOVEL_QUERY } from '../../graphql/Query'
import { Novel } from './components/Novel'
import { LoadingOrError } from '../../components/LoadingOrError'
import { useQuery } from 'react-apollo-hooks'

// import { viewTracker } from '../../../config/analytics'

function NovelScreen({ navigation }) {
  const novelId = navigation.state.params.novel.id
  const {
    data: { novel, chapters },
    error,
    loading
  } = useQuery(NOVEL_QUERY, { variables: { id: novelId } })
  return loading || error ? (
    <LoadingOrError loading={loading} error={error} />
  ) : (
    <Novel novel={novel} chapters={chapters} />
  )
}

export { NovelScreen }
