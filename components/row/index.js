import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import _ from 'lodash'
import {Colors} from '~/theme'
import styles from './style'

const Row = ({
  auditable = false,
  type = 'exam',
  disabled = false,
  comprehensive = false,
  style,
  onPress = () => {},
}) => {
  let source = null
  if (type === 'bookmarks') {
    source = require('~/assets/bookmarks.png')
  } else if (type === 'results') {
    source = require('~/assets/results.png')
  } else if (type === 'all chapters') {
    source = require('~/assets/allchapters.png')
  } else if (type === 'chapters') {
    source = require('~/assets/chapters.png')
  } else {
    source = require('~/assets/exam.png')
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      style={[styles.container, style]}
      onPress={() => onPress()}
    >
      <View style={styles.header}>
        <Image source={source} style={styles.icon} />
      </View>
      <View style={styles.body}>
        <Text style={[styles.title, disabled && {color: Colors.grey}]}>
          {auditable ? 'AUDIT ' + type : type}
        </Text>
        <Text style={styles.desc}>
          {type === 'bookmarks' &&
            (comprehensive
              ? 'View all of your bookmarked content'
              : 'Check all your bookmarked content')}
          {type === 'results' &&
            (comprehensive
              ? 'Check your results'
              : 'Check results against each attempt')}
          {type !== 'bookmarks' &&
            type !== 'results' &&
            (comprehensive
              ? 'A comprehensive test of all questions'
              : 'All chapters included in the module')}
        </Text>
      </View>
      {!disabled && (
        <View style={styles.footer}>
          <Image source={require('~/assets/arrow.png')} style={styles.arrow} />
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Row
