import { StyleSheet, Dimensions } from 'react-native'
import { Fonts } from '../../../../constants/Typography'
import { Colors } from '../../../../constants/Colors'

const { width } = Dimensions.get('window')

const boxWidth = width - 70
const bottonBodyContainer = -20 //80
const textPadding = bottonBodyContainer + 20

export const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  imageSection: {
    flex: 0.25
  },
  textContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25
  },
  textHeader: {
    fontSize: 26,
    fontFamily: 'alegreya-bold',
    textAlign: 'center'
  },
  infoSection: {
    flex: 0.11,
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  adsSection: {
    flex: 0.09
  },
  listSection: {
    flex: 0.55
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%'
  },
  labelInfo: {
    flexDirection: 'row'
  },
  label: {
    ...Fonts.style.tiny,
    lineHeight: 18,
    paddingLeft: 5
  }
})

export const styles2 = StyleSheet.create({
  containerImageBackground: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30
  },
  imageCardContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
    // elevation: 15
  },
  imageBox: {
    height: 250,
    width: boxWidth - 70,
    borderRadius: 10,
    borderWidth: 0
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    width: boxWidth,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: 'white',
    bottom: bottonBodyContainer
  },
  bodyContent: {
    paddingTop: textPadding,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10
  },
  title: {
    ...Fonts.style.h6,
    color: '#000',
    textAlign: 'center',
    backgroundColor: 'white'
  },
  scanContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  },
  lastChapterContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    backgroundColor: 'white'
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  labelContainerText: {
    ...Fonts.style.tiny,
    lineHeight: 16,
    paddingLeft: 2,
    backgroundColor: 'white'
  },
  labelContainerTextChapter: {
    ...Fonts.style.tiny,
    lineHeight: 16,
    paddingLeft: 2,
    marginLeft: 5,
    backgroundColor: 'white'
  },
  labelContainerTextDate: {
    fontSize: 10,
    lineHeight: 15,
    paddingLeft: 2,
    backgroundColor: 'white'
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    height: 20,
    width: 90,
    marginTop: 15,
    backgroundColor: Colors.primaryBlue
  },
  buttonContent: {
    padding: 5
  },
  backbutton: {
    width: '100%',
    marginTop: 15,
    marginLeft: 25
  },
  circleBack: {
    width: '9%',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#A9B2BA',
    elevation: 1
  }
})
