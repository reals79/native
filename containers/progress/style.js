import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Metrics.spacing.three,
    paddingBottom: 0,
  },
  signout: {
    marginRight: Metrics.spacing.three,
  },
  scroll: {
    height: 50,
  },
  tabs: {
    flexDirection: 'row',
    height: 50,
  },
  active: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    paddingHorizontal: Metrics.spacing.three,
    paddingVertical: Metrics.spacing.two,
  },
  tabTitle: {
    fontSize: 18,
    fontFamily: 'TradeGothicLTPro-Bold',
  },
  activeTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: 'TradeGothicLTPro-Bold',
  },
  inactive: {
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    paddingHorizontal: Metrics.spacing.three,
    paddingVertical: Metrics.spacing.two,
  },
  inactiveTitle: {
    color: Colors.secondary,
    fontSize: 18,
    fontFamily: 'TradeGothicLTPro-Bold',
  },
  content: {
    marginTop: Metrics.spacing.three,
  },
  aware: {
    fontSize: 16,
    fontFamily: 'TradeGothicLTPro-Bold',
    marginBottom: Metrics.spacing.two,
  },
  attempts: {
    fontFamily: 'TradeGothic',
    fontSize: 13,
  },
  nosection: {
    justifyContent: 'center',
    backgroundColor: Colors.skipped,
    borderRadius: Metrics.spacing.two,
    marginTop: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    height: 100,
  },
  notitle: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  nodesc: {
    fontFamily: 'TradeGothic',
    fontSize: 13,
    marginTop: Metrics.spacing.two,
    textAlign: 'center',
  },
})

export default styles
