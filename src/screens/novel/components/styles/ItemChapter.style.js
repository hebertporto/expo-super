import { StyleSheet } from 'react-native'
// import { Fonts } from '../../../../constants/fonts'
import { Colors } from '../../../../constants/Colors'

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8 * 2,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(179, 177, 177, 0.6)',
    backgroundColor: 'white',
    flex: 1
  },
  containerNumber: {
    flex: 0.15,
    paddingLeft: 10
  },
  numberText: {
    fontSize: 16,
    fontWeight: '500'
  },
  containerTitle: {
    flex: 0.6
  },
  containerDate: {
    flex: 0.25,
    flexDirection: 'row'
  },
  containerAd: {
    flex: 1
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  },
  dateText: {
    fontSize: 10,
    paddingLeft: 5,
    lineHeight: 14
  },
  button: {
    backgroundColor: Colors.primaryBlue,
    width: 150,
    borderRadius: 25
  }
})
