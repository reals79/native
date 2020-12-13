import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    paddingVertical: Metrics.spacing.three,
  },
  header: {
    width: 40,
  },
  icon: {
    resizeMode: 'contain',
    width: 24,
    height: 27,
  },
  body: {
    flex: 1,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  desc: {
    color: Colors.grey,
    fontFamily: 'TradeGothic',
    fontSize: 16,
    marginTop: Metrics.spacing.two,
  },
  footer: {
    width: 'auto',
  },
  arrow: {
    resizeMode: 'contain',
    width: 12,
    height: 10,
  },
})

export default styles
