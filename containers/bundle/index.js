import React, {useEffect} from 'react'
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'
import _ from 'lodash'
import {Card, Loading} from '~/components'
import ProductActions from '~/actions/product'
import {Colors} from '~/theme'
import {slug} from '@config'
import styles from './style'

const BundleScreen = ({navigation}) => {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: Colors.blue,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
    headerTitle: 'COURSES',
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'TradeGothicLTPro-Bold',
      fontSize: 26,
    },
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductActions.getbundlesRequest(slug))
  }, [])

  const handlePress = data => {
    dispatch(ProductActions.getmodulesRequest(data?.slug))
    navigation.navigate('Product', {data})
  }

  const status = useSelector(state => state.product.status)
  const animated = status === 'pending-bundles'

  const bundle = useSelector(state => state.product.bundle)

  if (_.isNil(bundle))
    return <Loading animated={animated} hasBack type="secondary" />

  const {subscribed, unsubscribed} = bundle

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.section}>
            {subscribed?.map((item, index) => (
              <TouchableOpacity
                activeOpacity={1}
                key={`uns${index}`}
                onPress={() => handlePress({...item, is_subscribed: true})}
              >
                <Card>
                  <Text style={styles.cardtitle}>{item.title}</Text>
                  <Text style={styles.carddesc} numberOfLines={5}>
                    {item.description}
                  </Text>
                  <View style={styles.view}>
                    <Text style={styles.viewtitle}>View course content</Text>
                    <Icon name="arrow-right" size={13} color={Colors.grey} />
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>

          {unsubscribed?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handlePress({...item, is_subscribed: false})}
            >
              <Card key={`s${index}`}>
                <View style={styles.row}>
                  <Text style={styles.cardtitle}>{item.title}</Text>
                  <Image
                    source={require('~/assets/lock.png')}
                    style={styles.lock}
                  />
                </View>
                <Text style={styles.carddesc} numberOfLines={5}>
                  {item.description}
                </Text>
                <View style={styles.view}>
                  <Text style={styles.viewtitle}>View course content</Text>
                  <Icon name="arrow-right" size={13} color={Colors.grey} />
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Loading animated={animated} hasBack type="secondary" />
    </SafeAreaView>
  )
}

export default BundleScreen
