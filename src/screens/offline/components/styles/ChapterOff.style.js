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
    marginHorizontal: 30,
    flexDirection: 'row'
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
    color: 'black',
    fontFamily: 'helvetica',
    letterSpacing: 1
  },
  textNoticeEndOfChapter: {
    paddingBottom: 15,
    textAlign: 'center'
  },
  adContainer: {
    flex: 0.15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#717171',
    marginRight: 8
  },
  textAuthor: {
    fontSize: 16,
    fontFamily: 'helvetica',
    letterSpacing: 1,
    fontWeight: '500'
  }
})
