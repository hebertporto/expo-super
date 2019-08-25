import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Chapter } from './components/Chapter'
import { LoadingOrError } from '../../components/LoadingOrError'
import { CHAPTER_QUERY } from '../../graphql/Query'

// import { viewTracker } from '../../../config/analytics'

function ChapterScreen({ navigation }) {
  const { id } = navigation.state.params.chapter
  // const id = '5d162b644f66ea0d76bd2bb1'
  const {
    data: { chapter },
    error,
    loading
  } = useQuery(CHAPTER_QUERY, { variables: { id } })

  return loading || error ? (
    <LoadingOrError loading={loading} error={error} />
  ) : (
    <Chapter chapter={chapter} />
  )
}

export { ChapterScreen }
