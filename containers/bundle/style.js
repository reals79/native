import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  section: {
    paddingBottom: Metrics.spacing.four,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  lock: {
    marginLeft: 'auto',
    width: 27,
    height: 27,
  },
  cardtitle: {
    fontSize: 26,
    fontFamily: 'TradeGothicLTPro-Bold',
    marginBottom: Metrics.spacing.two,
    marginRight: Metrics.spacing.four,
  },
  carddesc: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
    lineHeight: 22,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.spacing.four,
  },
  viewtitle: {
    color: Colors.grey,
    fontFamily: 'TradeGothic',
    fontSize: 13,
    marginRight: Metrics.spacing.two,
    textDecorationColor: Colors.grey,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
})

export default styles
