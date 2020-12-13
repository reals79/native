import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '~/theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: Metrics.spacing.two,
    marginTop: Metrics.spacing.three,
    marginHorizontal: Metrics.spacing.three,
    padding: Metrics.spacing.three,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
})

export default styles
