import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import BottomSheet from 'reanimated-bottom-sheet'
import {Button} from '~/components'
import ProductActions from '~/actions/product'
import styles from './style'

const IOS = ({product, sheetRef}) => {
  const productIDs = _.map(product.app_store_iaps, 'product_id')
  const tiers = _.map(product.app_store_iaps, 'tier')
  const status = useSelector(state => state.product.status)
  const isLoading = status === 'pending'

  const dispatch = useDispatch()
  const handleClose = () => {
    sheetRef.current.snapTo(1)
  }
  const handleSubscribe = () => {
    const payload = {iapProductIDs: productIDs, productID: product.id}
    dispatch(ProductActions.subscribeiosRequest(payload, handleClose))
  }

  const renderContent = () => (
    <View style={styles.content}>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.description}>IN-APP PURCHASE</Text>
      <Text style={styles.price}>
        PRICE -{' '}
        {tiers && tiers[0] ? parseFloat(tiers[0] - 0.01) : product.price}
      </Text>
      <Button
        disabled={isLoading}
        text={isLoading ? 'Processing ...' : 'Continue'}
        style={styles.continue}
        onPress={() => handleSubscribe()}
      />
    </View>
  )
  const renderHeader = () => <View />

  return (
    <>
      <TouchableOpacity
        style={styles.purchase}
        onPress={() => sheetRef?.current?.snapTo(0)}
      >
        <Text style={styles.ptitle}>
          Purchase for $
          {tiers && tiers[0] ? parseFloat(tiers[0] - 0.01) : product.price}
        </Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        initialSnap={1}
      />
    </>
  )
}

export default IOS
