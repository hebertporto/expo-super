// import React, { useState, useEffect } from 'react'
// import { View, StyleSheet } from 'react-native'
// import { getAll } from '../../services/app/offlineChapterService'
// import { ChapterListOff } from './components/ChapterListOff'

// function OfflineScreen({ navigation }) {
//   console.log('navigation: ', navigation.state.key)
//   const [chapters, setChapters] = useState([])

//   useEffect(() => {
//     console.log('rodou effect')
//     const getAllChapters = async () => {
//       const chapters = await getAll()
//       setChapters(chapters)
//     }
//     getAllChapters()
//   }, [])

//   return (
//     <View style={styles.container}>
//       <ChapterListOff chapters={chapters} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   title: {
//     textAlign: 'center',
//     paddingTop: 80,
//     fontSize: 22
//   },
//   text: {
//     fontSize: 14,
//     textAlign: 'center',
//     paddingTop: 5,
//     paddingHorizontal: 40
//   }
// })

// export { OfflineScreen }

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class OfflineScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Em Breve</Text>
        <Text style={styles.text}>
          Será possível salvar capítulos de suas Novels favoritas e ler offline!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    paddingTop: 80,
    fontSize: 22
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5,
    paddingHorizontal: 40
  }
})

export default { OfflineScreen }
