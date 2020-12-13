import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {Colors} from '~/theme'
import styles from './style'

const Answer = ({type, text, style, onPress = () => {}}) => (
  <TouchableOpacity
    style={[
      styles.container,
      (type === 'wrong' || type === 'Incorrect') && {
        backgroundColor: Colors.wrong,
      },
      (type === 'right' || type === 'Correct') && {
        backgroundColor: Colors.right,
      },
      style,
    ]}
    onPress={onPress}
  >
    <View style={styles.body}>
      <Text
        style={[
          styles.text,
          type === 'skipped' && {color: Colors.border},
          (type === 'wrong' || type === 'Incorrect') && {color: 'white'},
          (type === 'right' || type === 'Correct') && {color: 'white'},
          type === 'active' && {color: Colors.right},
        ]}
      >
        {text}
      </Text>
    </View>
    <View style={styles.footer}>
      {(type === 'right' || type === 'Correct' || type === 'active') && (
        <Image
          source={require('~/assets/right.png')}
          style={[styles.right, type === 'active' && {tintColor: Colors.right}]}
        />
      )}
      {(type === 'wrong' || type === 'Incorrect') && (
        <Image source={require('~/assets/wrong.png')} style={styles.wrong} />
      )}
      {type === 'skipped' && <View style={styles.skipped} />}
    </View>
  </TouchableOpacity>
)

export default Answer
