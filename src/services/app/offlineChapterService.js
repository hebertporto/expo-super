import { AsyncStorage } from 'react-native'
import { get } from 'lodash'

const INDICE = 'chaptersOffline'

export const getAll = async () => {
  const list = await AsyncStorage.getItem(INDICE)
  return list ? JSON.parse(list) : []
}

export const canBeSaved = async idChapter => {
  const chapters = await getAll()
  const limit = get(chapters, 'length', 0)
  if (limit > 0 && chapters.some(chapter => chapter.id === idChapter)) {
    return 2
  } else if (limit < 5) {
    return 1
  }
  return 0
}

const saveList = async chapterList =>
  AsyncStorage.setItem(INDICE, JSON.stringify(chapterList))

export const saveChapter = async chapter => {
  try {
    const chaptersList = await getAll()
    chaptersList.push(chapter)
    await saveList(chaptersList)
  } catch (e) {
    console.log('error salving chapter')
  }
}

export const removeChapter = async id => {
  try {
    const chapters = await getAll()
    const newChapters = chapters.filter(c => c.id !== id)
    await saveList(newChapters)
  } catch (e) {
    console.log('error remove chapter')
  }
}

export const getAllOfflineChapters = async () => getAll()

export const removeAllOfflineChapters = async () =>
  AsyncStorage.removeItem(INDICE)
