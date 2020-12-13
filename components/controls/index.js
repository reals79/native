import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {Colors} from '~/theme'
import styles from './style'
import {act} from 'react-test-renderer'

const LeftButton = ({active, style, onPress = () => {}}) => (
  <TouchableOpacity
    disabled={!active}
    style={[styles.container, style]}
    onPress={onPress}
  >
    <Image
      source={require('~/assets/arrow.png')}
      style={[styles.leftArrow, active && {tintColor: Colors.primary}]}
    />
    <Text style={[styles.label, active && {color: Colors.primary}]}>
      PREVIOUS
    </Text>
  </TouchableOpacity>
)

const RightButton = ({active, disabled = false, style, onPress = () => {}}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.container, style]}
    onPress={onPress}
  >
    {active ? (
      <>
        <Text style={[styles.label, active && {color: Colors.primary}]}>
          NEXT
        </Text>
        <Image
          source={require('~/assets/arrow.png')}
          style={[styles.rightArrow, active && {tintColor: Colors.primary}]}
        />
      </>
    ) : (
      <Text style={[styles.label, {color: Colors.primary}]}>DONE</Text>
    )}
  </TouchableOpacity>
)

export {LeftButton, RightButton}
