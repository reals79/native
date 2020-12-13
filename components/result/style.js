import {StyleSheet} from 'react-native'
import {Metrics} from '~/theme'

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 0,
    paddingVertical: Metrics.spacing.four,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Metrics.spacing.three + Metrics.spacing.two,
  },
  date: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
  },
})

export default styles
