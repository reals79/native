import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Metrics.spacing.three,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    borderTopColor: Colors.secondary,
  },
  skipped: {
    backgroundColor: Colors.border,
    borderRadius: 5,
    width: 10,
    height: 10,
  },
  body: {
    flex: 1,
    overflow: 'hidden',
    paddingLeft: Metrics.spacing.three,
  },
  text: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
    lineHeight: 20,
  },
  footer: {
    marginLeft: Metrics.spacing.three,
    marginRight: Metrics.spacing.three,
    width: 'auto',
  },
  right: {
    tintColor: 'white',
    width: 16,
    height: 11,
  },
  wrong: {
    tintColor: 'white',
    width: 14,
    height: 13,
  },
})

export default styles
