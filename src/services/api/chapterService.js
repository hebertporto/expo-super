export const getNovelChapters = async (id) => {
  try {
    const novel = await Axios.get(`https://stark-beach-53351.herokuapp.com/api/chaptertitles/${id}`)
    return novel.data.data
  } catch (e) {
    throw new Error('Error during get CHAPTERS TITLES')
  }
}

export const getChapterById = async (id) => {
  try {
    const chapter = await Axios.get(`https://stark-beach-53351.herokuapp.com/api/chapter/${id}`)
    console.log('chapter', chapter.data.data)
    return chapter.data.data[0]
  } catch (e) {
    throw new Error('Error during get CHAPTER')
  }
}