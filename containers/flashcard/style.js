import {Dimensions, StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
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
  flash: {
    flex: 1,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    marginTop: Metrics.spacing.four + Metrics.spacing.three,
    paddingBottom: 0,
    paddingHorizontal: 0,
    height: 240,
    zIndex: 2,
  },
  card1: {
    bottom: -6,
    marginHorizontal: 10,
    position: 'absolute',
    width: width - 52,
    height: 100,
    zIndex: 1,
  },
  card2: {
    bottom: -12,
    marginHorizontal: 16,
    position: 'absolute',
    width: width - 64,
    height: 100,
    zIndex: 0,
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
  front: {
    fontFamily: 'TradeGothic',
    fontSize: 24,
    lineHeight: 26,
    marginTop: Metrics.spacing.three,
    marginBottom: Metrics.spacing.five,
    paddingHorizontal: Metrics.spacing.three,
    textAlign: 'center',
  },
  back: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
    marginTop: Metrics.spacing.three,
    marginBottom: Metrics.spacing.three,
    paddingHorizontal: Metrics.spacing.three,
    textAlign: 'center',
  },
  goback: {
    color: 'rgb(142,156,184)',
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
    marginBottom: Metrics.spacing.three,
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
