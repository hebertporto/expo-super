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
  query NOVEL_QUERY($id: String!) {
    novel(id: $id) {
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
    chapters(id: $id) {
      id
      title
      number
      createdAt
      novel {
        name
      }
    }
  }
`
export const CHAPTER_QUERY = gql`
  query CHAPTER_QUERY($id: String!) {
    chapter(id: $id) {
      id
      title
      number
      translators
      revisors
      content
      createdAt
    }
  }
`
