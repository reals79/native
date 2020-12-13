import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
  title: {
    fontFamily: 'TradeGothic',
    fontSize: 13,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: Metrics.spacing.two,
  },
  primary: {
    backgroundColor: Colors.primary,
    height: 13,
  },
  secondary: {
    backgroundColor: '#EAF1FF',
    height: 13,
  },
})

export default styles
