import { Dimensions, StyleSheet } from 'react-native'
import { Fonts } from '../../../../constants/Typography'

const { width, height } = Dimensions.get('window')
const cols = 2
const rows = 3

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
    elevation: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'transparent'
  },
  imageContainer: {
    flex: 0.8,
    borderRadius: 10,
    // marginLeft: 5,
    // marginRight: 5,
    position: 'relative',
    marginTop: 10
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  textContainer: {
    flex: 0.2,
    height: 40,
    position: 'absolute',
    bottom: 3,
    paddingHorizontal: 5
  },
  title: {
    ...Fonts.style.description,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center'
  }
})
