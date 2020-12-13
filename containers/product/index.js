import React, {useState} from 'react'
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-native-modal'
import _ from 'lodash'
import {Button, Card, Loading, Row, Subscriptions} from '~/components'
import ProductActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const ProductScreen = ({route, navigation}) => {
  const [visible, setVisible] = useState(null) // desc, price
  const data = route?.params?.data

  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.logo}>
          {data?.title}
        </Text>
        <TouchableOpacity
          style={{width: Platform.OS === 'ios' ? 100 : 'auto'}}
          onPress={() => setVisible('desc')}
        >
          <Text style={styles.details}>Course Details</Text>
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
  })

  const bundle = useSelector(state => state.product.bundle)
  const status = useSelector(state => state.product.status)
  const courses = useSelector(state => state.product.courses)
  const course = courses[data.id]

  const modules = course?.modules || course?.auditable_modules
  const theme = course?.configurations || {}
  const animated = status === 'pending'

  const dispatch = useDispatch()
  const handleNavigate = (e, route = 'Module') => {
    if (e.is_subscribed) {
      if (e.type === 'Flashcard') {
        navigation.navigate('Flashcard', {data: e})
      } else {
        if (route === 'Module') {
          dispatch(ProductActions.getchapterRequest(e.module.id))
          navigation.navigate(route, {data: e})
        } else {
          dispatch(ProductActions.getallquestionsRequest(data.id))
          navigation.navigate('Quiz', {data, mode: 'study', type: 'all'})
        }
      }
    } else {
      if (e.type === 'Flashcard') {
        navigation.navigate('Flashcard', {data: e})
      } else {
        navigation.navigate('Quiz', {data: e})
      }
    }
  }

  const handleResults = e => {
    dispatch(ProductActions.getresultsRequest(e.module?.id))
    navigation.navigate('Result', {data: e})
  }

  const productIDs = _.map(bundle.app_store_iaps, 'product_id')
  const handleBuy = () => {
    const payload = {
      iapProductIDs: productIDs,
      productID: data.app_store_bundle_id,
    }
    dispatch(ProductActions.subscribeiosRequest(payload, setVisible(null)))
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* <Text style={styles.title}>QUICK FIND</Text>
        <View style={{marginBottom: 30}}>
          <TextInput
            placeholder="Search by topic, keyword, chapter, etc"
            style={styles.input}
          />
          <TouchableOpacity style={styles.search}>
            <Image
              source={require('~/assets/search.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View> */}
        {!data.is_subscribed && (
          <View style={{marginVertical: 30}}>
            <Text style={styles.cardTitle}>AUDIT THIS PRODUCT</Text>
            <Card style={styles.card}>
              {modules?.map((item, index) => {
                const configurations = {
                  ...theme,
                  ...(item.specific?.configurations || {}),
                }
                return (
                  <Row
                    key={`r${index}`}
                    auditable
                    type={_.toLower(item.module?.title)}
                    comprehensive={
                      configurations?.allow_comprehensive_quizzes ||
                      configurations?.allow_comprehensive_flashcards
                    }
                    style={
                      modules.length - 1 === index && {borderBottomWidth: 0}
                    }
                    onPress={() =>
                      handleNavigate({
                        ...item,
                        is_subscribed: false,
                        audit_data: {
                          productID: data.id,
                          productIDs,
                          title: data.title,
                          price: data.price,
                        },
                      })
                    }
                  />
                )
              })}
            </Card>
          </View>
        )}

        {!data.is_subscribed && (
          <TouchableOpacity
            style={styles.unlock}
            onPress={() => setVisible('price')}
          >
            <Text style={styles.utitle}>
              Unlock this course for ${data.price}
            </Text>
            <Image source={require('~/assets/lock.png')} style={styles.lock} />
          </TouchableOpacity>
        )}

        {modules?.map((item, index) => {
          const configurations = {
            ...theme,
            ...(item.specific?.configurations || {}),
          }
          return (
            <View key={index} style={{marginVertical: 30}}>
              <Text
                style={[
                  styles.cardTitle,
                  !data.is_subscribed && {color: Colors.grey},
                ]}
              >
                {item.module.title}
              </Text>
              <Card style={styles.card}>
                {((item.type === 'Quiz' &&
                  configurations?.allow_comprehensive_quizzes) ||
                  (item.type === 'Flashcard' &&
                    configurations?.allow_comprehensive_flashcards)) && (
                  <Row
                    type="all questions"
                    comprehensive
                    disabled={!data.is_subscribed}
                    onPress={() =>
                      handleNavigate({...item, is_subscribed: true}, 'Intro')
                    }
                  />
                )}
                <Row
                  type={_.toLower(item.specific?.section_title || 'chapters')}
                  disabled={!data.is_subscribed}
                  style={item.type === 'Flashcard' && {borderBottomWidth: 0}}
                  onPress={() => handleNavigate({...item, is_subscribed: true})}
                />
                {item.type !== 'Mix' &&
                  item.type !== 'Media' &&
                  configurations?.has_bookmarks && (
                    <Row
                      type="bookmarks"
                      comprehensive={
                        configurations?.allow_comprehensive_quizzes ||
                        configurations?.allow_comprehensive_flashcards
                      }
                      disabled={!data.is_subscribed}
                      onPress={() =>
                        navigation.navigate('Bookmark', {data: item})
                      }
                    />
                  )}
                {item.type === 'Quiz' && (
                  <Row
                    type="results"
                    style={{borderBottomWidth: 0}}
                    comprehensive={
                      configurations?.allow_comprehensive_quizzes ||
                      configurations?.allow_comprehensive_flashcards
                    }
                    disabled={!data.is_subscribed}
                    onPress={() => handleResults(item)}
                  />
                )}
              </Card>
            </View>
          )
        })}
      </ScrollView>
      <Modal isVisible={!_.isNil(visible)}>
        <View style={styles.modal}>
          <View
            style={[
              styles.modalcontent,
              visible === 'price' && {height: '40%', marginTop: 200},
            ]}
          >
            <Text
              style={[
                styles.mtitle,
                visible === 'price' && {textAlign: 'center'},
              ]}
            >
              {data.title}
            </Text>
            {visible === 'desc' && (
              <ScrollView>
                <Text style={styles.mdesc}>{data.description}</Text>
              </ScrollView>
            )}
            {visible === 'price' && (
              <>
                <Text
                  style={[
                    styles.mdesc,
                    {
                      fontSize: 18,
                      textAlign: 'center',
                      lineHeight: 26,
                    },
                  ]}
                >
                  Get unlimited access to all questions, explanations and
                  flashcards. Track your progress across comprehensive and
                  chapter tests.
                </Text>
                <Button
                  loading={animated}
                  text={'BUY FOR $' + data.price}
                  style={styles.buy}
                  onPress={handleBuy}
                />
              </>
            )}
          </View>
          <View style={styles.modalfooter}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setVisible(null)}
            >
              <Image
                source={require('~/assets/wrong.png')}
                style={styles.closeicon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Loading animated={animated} />
    </View>
  )
}

export default ProductScreen
