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
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    textDecorationColor: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  content: {
    flex: 1,
    paddingHorizontal: Metrics.spacing.three,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    marginBottom: Metrics.spacing.three,
    marginTop: Metrics.spacing.three + Metrics.spacing.two,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: Metrics.spacing.two,
    borderColor: Colors.border,
    borderWidth: 1,
    fontFamily: 'TradeGothic',
    fontSize: 16,
    paddingHorizontal: Metrics.spacing.three,
    width: 'auto',
    height: 65,
  },
  search: {
    position: 'absolute',
    right: 20,
    bottom: 22,
  },
  searchIcon: {
    width: 21,
    height: 21,
    resizeMode: 'stretch',
  },
  unlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderRadius: Metrics.spacing.two,
    borderColor: 'rgb(163,0,0)',
    borderWidth: 1,
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
  buy: {
    marginTop: 'auto',
  },
  card: {
    marginHorizontal: 0,
    paddingVertical: 5,
  },
  cardTitle: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  modal: {
    flex: 1,
  },
  modalcontent: {
    backgroundColor: 'white',
    borderRadius: Metrics.spacing.two,
    marginTop: Metrics.spacing.five,
    paddingHorizontal: Metrics.spacing.three,
    paddingVertical: Metrics.spacing.four,
    width: 'auto',
    height: '75%',
  },
  mtitle: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 26,
  },
  mdesc: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
    lineHeight: 22,
    marginTop: Metrics.spacing.four,
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
