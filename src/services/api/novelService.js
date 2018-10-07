import Axios from 'axios'

export const getAllNovels = async () => {
  try {
    const novelResponse = await Axios.get(`https://stark-beach-53351.herokuapp.com/api/novels`)
    return novelResponse.data.data
  } catch (err) {
    throw new Error('Error during get NOVELS')
  }
}
