import React, {useEffect, useState} from 'react'
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
import {Answer, Card, Controls} from '~/components'
import ProActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const BookmarkScreen = ({route, navigation}) => {
  const data = route.params.data
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.logo}>
          BOOKMARKS
        </Text>
        <Text style={styles.details}>Chapters</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
  })

  const [idx, setIdx] = useState(-1)
  const [quiz, setQuiz] = useState(null)
  const [visible, setVisible] = useState(-1)
  const [current, setCurrent] = useState(null)
  const [answers, setAnswers] = useState([])
  const [exp, setExp] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProActions.getbookmarkRequest(data.module.id))
  }, [])

  const bookmarks = useSelector(state => state.product.bookmarks)
  const bookmark = bookmarks[data.module.id]?.bookmarked_contents || []

  const handleNavigation = (ix, bk, qt) => {
    if (qt === bk.contents.length) {
      setVisible(-1)
      return
    }

    setIdx(ix)
    setQuiz(bk)
    setVisible(qt)

    const question = bk.contents[qt]
    const options = []
    _.keys(question).map(key => {
      if (
        _.includes(key, 'distractor') &&
        !_.isNil(question[key]) &&
        !_.isEmpty(question[key])
      )
        options.push(key)
    })

    const correct = Math.floor(Math.random() * (options.length + 1))
    const answers = [
      ...options.slice(0, correct),
      'correct',
      ...options.slice(correct),
    ]

    setCurrent(question)
    setAnswers(answers)
  }

  const handleFavorite = () => {
    const payload = {
      content_type_id: current.id,
      content_type: 'Question',
      destroy: true,
      // is_modulee_bookmark: true,
    }
    dispatch(
      ProActions.postbookmarkRequest(quiz.content_id, payload, data.module.id),
    )
  }

  const marks =
    bookmark?.length > 0
      ? bookmark[idx]?.contents.map(item => item.id) || []
      : []
  const isBookmarked = _.includes(marks, current?.id)

  let modal

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {bookmark?.length > 0 ? (
          bookmark.map((item, ix) => (
            <>
              <Text style={styles.title}>{item.title}</Text>
              <Card key={item.content_id} style={styles.card}>
                {item.contents.map((cnt, index) => (
                  <TouchableOpacity
                    style={[
                      styles.row,
                      index === item.contents.length - 1 && {
                        borderBottomWidth: 0,
                      },
                    ]}
                    onPress={() => handleNavigation(ix, item, index)}
                  >
                    <Text
                      key={cnt.quiz_id}
                      numberOfLines={1}
                      style={styles.body}
                    >
                      {cnt.question}
                    </Text>
                    <View style={styles.footer}>
                      <Image
                        source={require('~/assets/arrow.png')}
                        style={styles.arrow}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </Card>
            </>
          ))
        ) : (
          <View style={styles.empty}>
            <Text>No bookmarks to show</Text>
          </View>
        )}
      </ScrollView>
      <Modal isVisible={quiz && current && visible > -1}>
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
                    current?.status === 'Correct' && {
                      color: Colors.right,
                    },
                  ]}
                >
                  {current?.status}
                </Text>
                <TouchableOpacity
                  style={styles.favorite}
                  onPress={handleFavorite}
                >
                  <Image
                    source={
                      isBookmarked
                        ? require('~/assets/heart.png')
                        : require('~/assets/heartempty.png')
                    }
                    style={styles.heart}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.mdesc}>{current?.question}</Text>
              <View style={styles.manswers}>
                {answers.map((item, index) => (
                  <Answer
                    key={`a${index}`}
                    type={_.capitalize(item)}
                    text={current[item]}
                    style={index === 0 && {borderTopWidth: 1}}
                  />
                ))}
              </View>
              <TouchableOpacity onPress={() => setExp(!exp)}>
                <Text style={styles.mview}>
                  {exp ? 'Hide' : 'Show'} explanation
                </Text>
                {exp && <Text style={styles.exp}>{current?.explanation}</Text>}
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.mfooter}>
              <Controls.LeftButton
                active={visible > 0}
                onPress={() => handleNavigation(idx, quiz, visible - 1)}
              />
              <Controls.RightButton
                active={visible < quiz?.contents.length - 1}
                onPress={() => {
                  if (visible === quiz?.contents - 1)
                    handleNavigation(idx, quiz, visible - 1)
                  else handleNavigation(idx, quiz, visible + 1)
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
      </Modal>
    </View>
  )
}

export default BookmarkScreen
