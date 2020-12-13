import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: Colors.primary,
  },
  leftArrow: {
    marginRight: Metrics.spacing.three,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    width: 13,
    height: 10,
  },
  rightArrow: {
    marginLeft: Metrics.spacing.three,
    width: 13,
    height: 10,
  },
  label: {
    color: 'rgb(142,156,184)',
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
  },
})

export default styles
