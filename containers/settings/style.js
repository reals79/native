import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Metrics.spacing.three,
  },
  scene: {
    flex: 1,
    backgroundColor: Colors.background,
    marginBottom: Metrics.spacing.four,
  },
  header: {
    fontSize: 16,
    fontFamily: 'TradeGothicLTPro-Bold',
    marginTop: Metrics.spacing.four,
  },
  card: {
    marginHorizontal: 0,
    paddingVertical: 30,
  },
  input: {
    marginTop: 0,
    marginBottom: 30,
  },
  logout: {
    backgroundColor: Colors.wrong,
    borderColor: 'rgb(163,0,0)',
    marginTop: Metrics.spacing.four,
    marginBottom: Metrics.spacing.two,
  },
})

export default styles
