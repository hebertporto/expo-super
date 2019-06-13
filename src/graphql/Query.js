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

export const NOVEL_QUERY = gql`
  query {
    novel(id: "58d822dc8f3f0e0004f4d2a0") {
      name
      description
      author
      translationTeam
      coverUrl
      lastChapter {
        title
        number
      }
    }
    chapters(id: "58d822dc8f3f0e0004f4d2a0") {
      id
      title
      number
      createdAt
    }
  }
`
