import {Dimensions, Platform, StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    width: width - 140,
  },
  logo: {
    color: 'white',
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 26,
  },
  details: {
    color: 'white',
    fontFamily: 'TradeGothic',
    fontSize: 16,
    marginTop: Metrics.spacing.two,
  },
  content: {
    padding: Metrics.spacing.three,
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
  result: {
    marginBottom: Metrics.spacing.four,
  },
})

export default styles
