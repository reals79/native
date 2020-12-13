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
    flex: 3,
    padding: Metrics.spacing.three,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    marginBottom: Metrics.spacing.three,
    textTransform: 'uppercase',
  },
  progress: {
    marginBottom: Metrics.spacing.five,
  },
  desc: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
  },
  controls: {
    flex: 2,
    padding: Metrics.spacing.three,
  },
  study: {
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 2,
    marginBottom: Metrics.spacing.four,
  },
  studyLabel: {
    color: Colors.primary,
  },
})

export default styles
