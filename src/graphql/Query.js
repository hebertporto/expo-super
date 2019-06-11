import gql from 'graphql-tag'

export const GET_NOVELS = gql`
  query {
    getNovels {
      id
      name
      coverUrl
      chapters {
        number
        title
        createdAt
      }
    }
  }
`
