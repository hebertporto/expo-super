import gql from 'graphql-tag'

export const NOVELS_QUERY = gql`
  query {
    novels {
      id
      name
      coverUrl
      description
      lastChapter {
        number
        title
        createdAt
      }
    }
  }
`
