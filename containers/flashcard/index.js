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
import _ from 'lodash'
import {Button, Card, Loading, Progress} from '~/components'
import ProActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const FlashcardScreen = ({route, navigation}) => {
  const data = route.params.data
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.logo}>
          {data?.title || data?.module?.title}
        </Text>
        <Text style={styles.details}>Chapters</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
  })
  const hasBookmarks = data.configurations?.has_bookmarks

  const [index, setIndex] = useState(0)
  const [toggle, setToggle] = useState(false)
  const questions = data.auditable_content_types
  const current = questions ? questions[index] : {}

  const bookmarks = useSelector(state => state.product.bookmarks)
  const bookmark = bookmarks[data.module.id]?.bookmarked_contents || []
  const isBookmarked = _.find(bookmark, function(o) {
    return o === current?.id
  })

  const dispatch = useDispatch()

  const handleNext = e => {
    if (questions.length > index + 1) {
      setIndex(index + 1)
      setToggle(false)
    } else {
      navigation.goBack()
    }
  }

  const handlePrev = e => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const handleFavorite = e => {
    const payload = {
      content_type_id: current.id,
      content_type: 'Question',
      destroy: !_.isNil(isBookmarked),
      // is_modulee_bookmark: true,
    }
    dispatch(ProActions.postbookmarkRequest(data.id, payload))
  }

  return _.isNil(questions) ? (
    <Loading animated hasBack type="secondary" />
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{data.module?.title || data.title}</Text>
        <Progress total={questions?.length} current={index + 1} color="green" />
        <View style={{marginBottom: 80}}>
          <TouchableOpacity
            style={styles.flash}
            onPress={() => setToggle(!toggle)}
          >
            <Card style={styles.card}>
              {hasBookmarks && (
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
              )}
              <Text style={toggle ? styles.back : styles.front}>
                {toggle ? current?.back : current?.front}
              </Text>
              <Text style={styles.goback}>
                Tap {toggle ? 'to go back' : 'for answer'}
              </Text>
            </Card>
            <Card style={styles.card1} />
            <Card style={styles.card2} />
          </TouchableOpacity>
          <View style={{marginTop: 50}}>
            <View style={styles.controls}>
              <Button
                disabled={index === 0}
                style={styles.lbutton}
                onPress={handlePrev}
              >
                <Image
                  source={require('~/assets/arrow.png')}
                  style={styles.larrow}
                />
                <Text style={styles.ltitle}>PREVIOUS</Text>
              </Button>
              <Button style={styles.rbutton} onPress={handleNext}>
                <Text style={styles.rtitle}>
                  {index === questions.length - 1 ? 'DONE' : 'NEXT'}
                </Text>
                {index < questions.length - 1 && (
                  <Image
                    source={require('~/assets/arrow.png')}
                    style={styles.rarrow}
                  />
                )}
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default FlashcardScreen
