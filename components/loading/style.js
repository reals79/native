import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: Colors.border,
    borderWidth: 1,
    shadowColor: 'rgba(106,117,172,0.3)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    width: 170,
    height: 70,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 26,
  },
})

export default styles
