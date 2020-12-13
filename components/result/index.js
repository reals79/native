import React from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment'
import {Card, Status} from '~/components'
import {Colors} from '~/theme'
import styles from './style'

const Result = ({date, right, wrong, skipped, style}) => {
  return (
    <Card style={[styles.card, style]}>
      <View style={styles.header}>
        <Text style={styles.date}>
          {moment(date).format('MM/DD/YY [at] HH:mm A')}
        </Text>
        <Icon name="arrow-right" size={18} color={Colors.grey} />
      </View>
      <Status right={right} wrong={wrong} skipped={skipped} />
    </Card>
  )
}

export default Result
