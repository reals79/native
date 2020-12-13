import React from 'react'
import {Platform, Text, TextInput, View} from 'react-native'
import styles from './style'

const Input = ({
  label = 'email',
  editable = true,
  error = '',
  value,
  onChange,
  ...props
}) => (
  <View style={[styles.container, props.style]}>
    <Text style={styles.label}>{label}</Text>
    {Platform.OS === 'ios' ?
      <TextInput
        {...props}
        autoCapitalize={false}
        editable={editable}
        placeholder="Email"
        value={value}
        numberOfLines={1}
        color="#000"
        placeholderTextColor="#c7c7cd"
        style={[styles.input, !editable && styles.disabled]}
        onChangeText={e => onChange(e)}
      />
    :
      <TextInput
        {...props}
        autoCapitalize={false}
        editable={editable}
        placeholder="Email"
        value={value}
        numberOfLines={1}
        placeholderTextColor="#c7c7cd"
        style={[styles.input, !editable && styles.disabled]}
        onChangeText={e => onChange(e)}
      />
    }
    
    {!!error && <Text style={styles.error}>{error}</Text>}
  </View>
)

export default Input
