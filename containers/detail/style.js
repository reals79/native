import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    width: Metrics.screenWidth - 140,
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
  },
  card: {
    marginHorizontal: 0,
    marginBottom: Metrics.spacing.four,
  },
  status: {
    marginTop: Metrics.spacing.three,
    marginBottom: Metrics.spacing.four,
  },
  modal: {
    flex: 1,
  },
  modalcontent: {
    backgroundColor: 'white',
    borderRadius: Metrics.spacing.two,
    marginTop: (Metrics.screenHeight - 670) / 2,
    paddingVertical: Metrics.spacing.four,
    width: 'auto',
    height: 550,
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
    marginTop: Metrics.spacing.five,
    marginBottom: Metrics.spacing.three,
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
