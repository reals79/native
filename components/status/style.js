import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
  },
  rightBar: {
    backgroundColor: Colors.right,
    height: 16,
  },
  wrongBar: {
    backgroundColor: Colors.wrong,
    height: 16,
  },
  skippedBar: {
    backgroundColor: Colors.skipped,
    height: 16,
  },
  rightRec: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.right,
    borderRadius: Metrics.spacing.one,
    width: 27,
    height: 18,
  },
  wrongRec: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.wrong,
    borderRadius: Metrics.spacing.one,
    width: 27,
    height: 18,
  },
  skippedRec: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.skipped,
    borderRadius: Metrics.spacing.one,
    width: 27,
    height: 18,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.spacing.three,
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteLabel: {
    color: 'white',
    fontSize: 13,
    lineHeight: 21,
    fontFamily: 'TradeGothic',
  },
  greyLabel: {
    color: Colors.grey,
    fontSize: 13,
    lineHeight: 21,
    fontFamily: 'TradeGothic',
  },
  label: {
    color: 'black',
    fontFamily: 'TradeGothic',
    fontSize: 16,
    marginLeft: Metrics.spacing.two,
  },
})

export default styles
