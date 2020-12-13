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
import moment from 'moment'
import {Answer, Card, Controls, Line, Status} from '~/components'
import ProActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const DetailScreen = ({route, navigation}) => {
  const data = route.params.data
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.logo}>
          {data?.title || data?.module?.title}
        </Text>
        <Text style={styles.details}>
          {moment(data.viewed_at).format('MM/DD/YY [at] HH:mm A')}
        </Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
  })
  const [visible, setVisible] = useState(-1)
  const [exp, setExp] = useState(false)

  const dispatch = useDispatch()
  const handleFavorite = () => {
    const payload = {
      content_type_id: result[visible]?.id,
      content_type: 'Question',
      destroy: result[visible]?.is_bookmarked,
      // is_modulee_bookmark: true,
    }
    dispatch(ProActions.postbookmarkRequest(data.parent_id, payload))
  }

  let modal = null

  const details = useSelector(state => state.product.details)
  const result = details[data.id]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Card style={[styles.card]}>
          <Status
            right={data.correct_answers}
            wrong={data.incorrect_answers}
            skipped={data.unattempted_answers}
            style={styles.status}
          />
          {result?.map((item, index) => (
            <Line
              key={index}
              type={item.status}
              text={item.question}
              style={index === result.length - 1 && {borderBottomWidth: 0}}
              onPress={() => setVisible(index)}
            />
          ))}
        </Card>
      </ScrollView>
      <Modal isVisible={visible > -1}>
        {visible > -1 && (
          <View style={styles.modal}>
            <View style={styles.modalcontent}>
              <ScrollView
                ref={ref => (modal = ref)}
                onContentSizeChange={(w, h) =>
                  modal.scrollToEnd({animated: true})
                }
                style={styles.modalscroll}
              >
                <View style={styles.favorite}>
                  <Text
                    style={[
                      styles.mtitle,
                      result[visible]?.status === 'Correct' && {
                        color: Colors.right,
                      },
                    ]}
                  >
                    {result[visible]?.status}
                  </Text>
                  {data.has_bookmarks && (
                    <TouchableOpacity
                      style={styles.favorite}
                      onPress={handleFavorite}
                    >
                      <Image
                        source={
                          result[visible]?.is_bookmarked
                            ? require('~/assets/heart.png')
                            : require('~/assets/heartempty.png')
                        }
                        style={styles.heart}
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <Text style={styles.mdesc}>{result[visible]?.question}</Text>
                <View style={styles.manswers}>
                  {result[visible]?.options?.map((item, index) => (
                    <Answer
                      key={`a${index}`}
                      type={
                        item[0] === Number(result[visible]?.selected)
                          ? result[visible]?.status
                          : item[1] === result[visible]?.correct
                          ? 'active'
                          : ''
                      }
                      text={item[1]}
                      style={index === 0 && {borderTopWidth: 1}}
                    />
                  ))}
                </View>
                <TouchableOpacity onPress={() => setExp(!exp)}>
                  <Text style={styles.mview}>
                    {exp ? 'Hide' : 'Show'} explanation
                  </Text>
                  {exp && (
                    <Text style={styles.exp}>
                      {result[visible]?.explanation}
                    </Text>
                  )}
                </TouchableOpacity>
              </ScrollView>
              <View style={styles.mfooter}>
                <Controls.LeftButton
                  active={visible > 0}
                  onPress={() => setVisible(visible - 1)}
                />
                <Controls.RightButton
                  active={visible < result.length - 1}
                  onPress={() => {
                    if (visible === result.length - 1) setVisible(-1)
                    else setVisible(visible + 1)
                  }}
                />
              </View>
            </View>
            <View style={styles.modalfooter}>
              <TouchableOpacity
                style={styles.close}
                onPress={() => setVisible(-1)}
              >
                <Image
                  source={require('~/assets/wrong.png')}
                  style={styles.closeicon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
    </View>
  )
}

export default DetailScreen
