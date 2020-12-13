import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: Metrics.spacing.four,
  },
  logo: {
    width: 77,
    height: 89,
  },
  body: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: Metrics.spacing.two,
    padding: Metrics.spacing.three,
    paddingTop: Metrics.spacing.four,
  },
  goback: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
  },
  goside: {
    width: 50,
    justifyContent: 'center',
  },
  gocenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    resizeMode: 'contain',
    transform: [
      {
        rotate: '180deg',
      },
    ],
    width: 20,
    height: 16,
  },
  forgot: {
    flex: 1,
    color: Colors.primary,
    fontSize: 26,
    fontFamily: 'TradeGothicLTPro-Bold',
  },
  reset: {
    marginTop: 40,
  },
})

export default styles
