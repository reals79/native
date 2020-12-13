import React from 'react'
import {Platform} from 'react-native'
import IOS from './ios'
import Android from './android'

const Subscriptions = ({product}) => {
  const sheetRef = React.useRef(null)
  return (
    <>
      {Platform.OS === 'ios' && <IOS product={product} sheetRef={sheetRef} />}
      {Platform.OS === 'android' && <Android />}
    </>
  )
}

export default Subscriptions
