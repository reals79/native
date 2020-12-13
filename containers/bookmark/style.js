import {Dimensions, Platform, StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: Colors.background,
    paddingLeft: Metrics.spacing.three,
    paddingRight: Metrics.spacing.three,
    paddingBottom: Metrics.spacing.three,
  },
  empty: {
    alignItems: 'center',
    padding: Metrics.spacing.four,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    marginTop: Metrics.spacing.four,
    textTransform: 'uppercase',
  },
  card: {
    marginHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    paddingVertical: Metrics.spacing.three,
  },
  body: {
    flex: 1,
    fontFamily: 'TradeGothic',
    fontSize: 16,
    overflow: 'hidden',
  },
  footer: {
    width: 'auto',
  },
  arrow: {
    resizeMode: 'contain',
    width: 12,
    height: 10,
  },
  modal: {
    flex: 1,
  },
  modalcontent: {
    backgroundColor: 'white',
    borderRadius: Metrics.spacing.two,
    marginTop: Metrics.spacing.five,
    paddingVertical: Metrics.spacing.four,
    width: 'auto',
    height: '75%',
  },
  modalscroll: {
    marginBottom: Metrics.spacing.three,
  },
  favorite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: Metrics.spacing.two,
  },
  heart: {
    marginLeft: 'auto',
    marginBottom: Metrics.spacing.two,
    width: 24,
    height: 21,
  },
  mtitle: {
    color: Colors.wrong,
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: Metrics.spacing.three,
    paddingHorizontal: Metrics.spacing.three,
  },
  mdesc: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 26,
    marginBottom: Metrics.spacing.four,
    paddingHorizontal: Metrics.spacing.three,
  },
  manswers: {
    flex: 1,
  },
  mview: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    marginBottom: Metrics.spacing.three,
    marginTop: Metrics.spacing.five,
    textAlign: 'center',
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  exp: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    marginBottom: Metrics.spacing.four,
    marginHorizontal: Metrics.spacing.three,
    textAlign: 'center',
  },
  mfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.spacing.four,
  },
  modalfooter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  close: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: Metrics.spacing.four,
    marginHorizontal: 'auto',
    width: 60,
    height: 60,
  },
  closeicon: {
    width: 20,
    height: 20,
  },
})

export default styles
