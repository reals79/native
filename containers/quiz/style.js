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
    flex: 1,
    padding: Metrics.spacing.three,
    paddingBottom: 0,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    marginBottom: Metrics.spacing.three,
    marginTop: Metrics.spacing.three,
    textTransform: 'uppercase',
  },
  card: {
    flex: 1,
    marginHorizontal: 0,
    marginTop: Metrics.spacing.four + Metrics.spacing.three,
    overflow: 'hidden',
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  favorite: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.spacing.three,
  },
  heart: {
    marginLeft: 'auto',
    marginBottom: Metrics.spacing.two,
    width: 24,
    height: 21,
  },
  question: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
    marginTop: Metrics.spacing.three,
    marginBottom: Metrics.spacing.five,
    paddingHorizontal: Metrics.spacing.three,
  },
  options: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.secondary,
    borderTopWidth: 1,
    paddingHorizontal: Metrics.spacing.three,
    paddingVertical: Metrics.spacing.three + Metrics.spacing.one,
  },
  answer: {
    flex: 1,
    fontFamily: 'TradeGothic',
    fontSize: 16,
    lineHeight: 20,
  },
  right: {
    marginLeft: 20,
    tintColor: 'white',
    width: 20,
    height: 14,
  },
  wrong: {
    marginLeft: 20,
    tintColor: 'white',
    width: 14,
    height: 13,
  },
  view: {
    marginHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  explanation: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
  },
  down: {
    resizeMode: 'contain',
    width: 12,
    height: 10,
  },
  active: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  exdesc: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
    marginTop: Metrics.spacing.three,
  },
  controls: {
    flexDirection: 'row',
    marginTop: Metrics.spacing.three,
  },
  lbutton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 2,
    marginRight: Metrics.spacing.two,
    paddingHorizontal: Metrics.spacing.three,
  },
  ltitle: {
    color: Colors.primary,
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
  larrow: {
    marginRight: Metrics.spacing.two,
    tintColor: Colors.primary,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    width: 16,
    height: 13,
  },
  rbutton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.spacing.three,
    paddingHorizontal: Metrics.spacing.three,
  },
  rtitle: {
    color: 'white',
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
  rarrow: {
    marginLeft: Metrics.spacing.three,
    tintColor: 'white',
    width: 16,
    height: 13,
  },
  submit: {
    marginVertical: Metrics.spacing.four,
  },
})

export default styles
