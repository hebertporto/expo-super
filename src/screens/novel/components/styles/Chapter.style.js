import { StyleSheet } from 'react-native'
// import { Fonts } from '../../../../constants/fonts'
// import { Colors } from '../../../../constants/Colors'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 0.15,
    paddingTop: 20,
    marginHorizontal: 30
  },
  iconWithText: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 0.85
  },
  textChapter: {
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 30,
    fontSize: 16,
    lineHeight: 20,
    color: 'black'
  },
  textNoticeEndOfChapter: {
    paddingBottom: 15,
    textAlign: 'center'
  },
  adContainer: {
    flex: 0.1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
