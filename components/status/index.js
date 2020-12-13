import React from 'react'
import {Text, View} from 'react-native'
import styles from './style'

const Status = ({right, wrong, skipped, style}) => (
  <View style={style}>
    <View style={styles.bar}>
      <View style={[styles.rightBar, {flex: right}]} />
      <View style={[styles.wrongBar, {flex: wrong}]} />
      <View style={[styles.skippedBar, {flex: skipped}]} />
    </View>
    <View style={styles.labelRow}>
      <View style={styles.cell}>
        <View style={styles.rightRec}>
          <Text style={styles.whiteLabel}>{right}</Text>
        </View>
        <Text style={styles.label}>Right</Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.wrongRec}>
          <Text style={styles.whiteLabel}>{wrong}</Text>
        </View>
        <Text style={styles.label}>Wrong</Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.skippedRec}>
          <Text style={styles.greyLabel}>{skipped}</Text>
        </View>
        <Text style={styles.label}>Skipped</Text>
      </View>
    </View>
  </View>
)

export default Status
