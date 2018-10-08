import { AsyncStorage } from 'react-native'
const INDICE = 'chaptersOffline'

const getAll = async () => {
  const list = await AsyncStorage.getItem(INDICE)
  return list ? JSON.parse(list) : []
}

const saveList = async (chapterList) => AsyncStorage.setItem(INDICE, JSON.stringify(chapterList))

export const saveChapter = async (chapter) => {
  try {
    const chaptersList = await getAll()
    chaptersList.push(chapter)
    console.log('chaper to save', chaptersList)
    await saveList(chaptersList)
  } catch (e) {
    console.log('error save chapter', e)
  }
}

export const removeChapter = async (chapter) => {
  try {
    const chapters = await getAll()
    const newChapters = chapters.filter(c => c._id !== chapter._id)
    await saveList(newChapters)
  } catch (e) {
    console.log('error remove chapter')
  }
}

export const getAllOfflineChapters = async () => getAll()

export const removeAllOfflineChapters = async () => AsyncStorage.removeItem(INDICE)

// const arr = [1, 2, 3, 4].map((x, index) => {
//   const obj = {}
//   obj.key = index
//   return obj
// })

// try {
//   await AsyncStorage.setItem('chaptersOff', JSON.stringify(arr))
// } catch (error) {
//   // Error saving data
// }

// try {
//   const myArray = await AsyncStorage.getItem('chaptersOff')
//   if (myArray !== null) {
//     // We have data!!
//     console.log('We have data!!', JSON.parse(myArray))
//   }
// } catch (error) {
//   console.log('error remove chapter')
//   // Error retrieving data
// }
