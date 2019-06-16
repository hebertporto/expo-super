import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { Chapter } from './components/Chapter'
import { LoadingOrError } from '../../components/LoadingOrError'
import { CHAPTER_QUERY } from '../../graphql/Query'

// import { viewTracker } from '../../../config/analytics'

function ChapterScreen({ navigation }) {
  const chapterId = navigation.state.params.chapter.id
  const {
    data: { chapter },
    error,
    loading
  } = useQuery(CHAPTER_QUERY, { variables: { id: chapterId } })

  return loading || error ? (
    <LoadingOrError loading={loading} error={error} />
  ) : (
    <Chapter chapter={chapter} />
  )
}

export { ChapterScreen }
