import {Dimensions, StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  purchase: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
  },
  content: {
    backgroundColor: 'white',
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
    padding: 16,
    height: 450,
  },
  ptitle: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
  },
  title: {
    fontFamily: 'TradeGothicLTPro-Bold',
    fontSize: 26,
    lineHeight: 30,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  price: {
    fontFamily: 'TradeGothic',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
  },
  continue: {
    marginTop: Metrics.spacing.three,
  },
})

export default styles
