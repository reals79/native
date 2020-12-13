import React, {useState} from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-native-modal'
import {Button, Card} from '~/components'
import ProActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const ModuleScreen = ({route, navigation}) => {
  const data = route.params.data
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.logo}>
          {data.module?.title}
        </Text>
        <Text style={styles.details}>Chapters</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
  })

  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  const status = useSelector(state => state.product.status)
  const chapters = useSelector(state => state.product.chapters)
  const chapter = chapters[data.module.id]
  const modules = chapter?.children || []
  const animated = status === 'pending'

  const handleNavigation = item => {
    const route = item.actable_type === 'Quiz' ? 'Intro' : item.actable_type
    dispatch(ProActions.getcomprehensiveRequest(item.id, 'Quiz'))
    navigation.navigate(route, {data: item})
  }
  const handleBuy = () => {
    const {productIDs, productID} = data.audit_data
    const payload = {iapProductIDs: productIDs, productID}
    dispatch(ProActions.subscribeiosRequest(payload, setVisible(false)))
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {!data.is_subscribed && (
          <TouchableOpacity
            style={styles.unlock}
            onPress={() => setVisible('price')}
          >
            <Text style={styles.utitle}>Tab to unlock this course</Text>
            <Image source={require('~/assets/lock.png')} style={styles.lock} />
          </TouchableOpacity>
        )}
        <Card style={styles.card}>
          {modules?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.row, modules.length === index + 1 && styles.last]}
              onPress={() =>
                handleNavigation({...item, is_subscribed: data.is_subscribed})
              }
            >
              <View style={styles.body}>
                <Text style={styles.title}>{item.title}</Text>
                <Text
                  style={[
                    styles.desc,
                    !data.is_subscribed && {color: Colors.grey},
                  ]}
                >
                  {item.children_count} Questions
                </Text>
              </View>
              <View style={styles.footer}>
                <Image
                  source={require('~/assets/arrow.png')}
                  style={styles.arrow}
                />
              </View>
            </TouchableOpacity>
          ))}
        </Card>
      </ScrollView>

      <Modal isVisible={visible}>
        <View style={styles.modal}>
          <View style={styles.modalcontent}>
            <Text style={styles.mtitle}>{data.audit_data?.title}</Text>
            <Text style={styles.mdesc}>
              Get unlimited access to all questions, explanations and
              flashcards. Track your progress across comprehensive and chapter
              tests.
            </Text>
            <Button
              loading={animated}
              text={'BUY FOR $' + data.audit_data?.price}
              style={styles.buy}
              onPress={handleBuy}
            />
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
    </View>
  )
}

export default ModuleScreen
