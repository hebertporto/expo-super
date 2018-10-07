import {
  StyleSheet
} from 'react-native'
// import { Fonts } from '../../../../constants/fonts'
import { Colors } from '../../../../constants/colors'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8 * 2,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(179, 177, 177, 0.6)',
    backgroundColor: 'white',
    flex: 1
  },
  rowAdvertising: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(179, 177, 177, 0.6)',
    backgroundColor: 'white',
    flex: 1
  },
  containerNumber: {
    flex: 0.15
  },
  containerTitle: {
    flex: 0.67
  },
  containerDate: {
    flex: 0.18
  },
  containerAd: {
    flex: 1
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  },
  button: {
    backgroundColor: Colors.primaryBlue,
    width: 150,
    borderRadius: 25
  }
})
