import { Dimensions, StyleSheet } from 'react-native'
import { Fonts } from '../../../../constants/Typography'

const { width, height } = Dimensions.get('window')
const cols = 1
const rows = 7

export const styles = StyleSheet.create({
  container: {
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10
  },
  imageContainer: {
    flex: 0.1,
    backgroundColor: '#72CDE8'
  },
  textContainerHeader: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  textHeader: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'helvetica'
  },
  image: {
    ...StyleSheet.absoluteFillObject
  },
  textContainer: {
    flex: 0.9,
    paddingHorizontal: 8,
    position: 'relative'
  },
  title: {
    ...Fonts.style.description,
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 20
  },
  updateContainer: {
    position: 'absolute',
    bottom: 0,
    left: 8
  }
})
