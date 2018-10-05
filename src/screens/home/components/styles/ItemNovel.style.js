import {
  Dimensions,
  StyleSheet
} from 'react-native'
import { Fonts } from '../../../../constants/fonts'

const { width, height } = Dimensions.get('window')
const cols = 3
const rows = 3

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
    elevation: 5
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  textContainer: {
    height: 40
  },
  title: {
    ...Fonts.style.description,
    marginTop: 4,
    textAlign: 'center'
  }
})
