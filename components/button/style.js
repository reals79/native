import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'TradeGothicLTPro-Bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Metrics.spacing.two,
    borderColor: 'rgb(0,52,112)',
    borderWidth: 1,
    shadowColor: 'rgba(106,117,172,0.3)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    width: 'auto',
    height: 65,
  },
})

export default styles
