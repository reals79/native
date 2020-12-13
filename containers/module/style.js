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
    paddingHorizontal: Metrics.spacing.three,
  },
  unlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderRadius: Metrics.spacing.two,
    borderColor: 'rgb(163,0,0)',
    borderWidth: 1,
    marginHorizontal: Metrics.spacing.three,
    marginTop: Metrics.spacing.three,
    paddingHorizontal: Metrics.spacing.four,
    height: 60,
  },
  utitle: {
    color: 'white',
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 22,
  },
  lock: {
    marginLeft: 'auto',
    tintColor: 'white',
    width: 27,
    height: 27,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Metrics.spacing.three,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
  last: {
    borderBottomWidth: 0,
  },
  body: {
    flex: 1,
  },
  card: {
    paddingVertical: 5,
    marginBottom: Metrics.spacing.four,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  desc: {
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
  modal: {
    flex: 1,
  },
  modalcontent: {
    backgroundColor: 'white',
    borderRadius: Metrics.spacing.two,
    marginTop: 200,
    paddingHorizontal: Metrics.spacing.three,
    paddingVertical: Metrics.spacing.four,
    width: 'auto',
    height: '40%',
  },
  mtitle: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 26,
    textAlign: 'center',
  },
  mdesc: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    marginTop: Metrics.spacing.four,
  },
  buy: {
    marginTop: 'auto',
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
