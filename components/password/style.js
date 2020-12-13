import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 40,
  },
  label: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
    marginBottom: Metrics.spacing.two,
  },
  input: {
    backgroundColor: 'white',
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: Metrics.spacing.two,
    color: '#000000',
    fontFamily: 'TradeGothic',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 60,
    height: 65,
  },
  secure: {
    fontFamily: 'TradeGothic',
    fontSize: 16,
    position: 'absolute',
    bottom: 24,
    right: 20,
  },
  secureText: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
  error: {
    color: Colors.wrong,
    fontFamily: 'TradeGothic',
    fontSize: 14,
    marginTop: Metrics.spacing.two,
  },
})

export default styles
