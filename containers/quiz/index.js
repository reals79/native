import React, {useEffect, useState} from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import {Button, Card, Loading, Progress} from '~/components'
import ProActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const QuizScreen = ({route, navigation}) => {
  const data = route.params.data
  const to = route.params.to
  const mode = route.params.mode || 'study'
  const type = route.params.type || 'single'
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
  const skippable = data.configurations?.skippable
  const hasBookmarks = data.configurations?.has_bookmarks

  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [view, setView] = useState(false)

  const quizes = useSelector(state => state.product.quizes)
  const allquestions = useSelector(state => state.product.questions)
  const quiz = quizes[data.id]
  const questions = data.is_subscribed
    ? type === 'all'
      ? allquestions[data.id]
      : quiz?.questions || []
    : data.auditable_content_types
  const viewed = data.is_subscribed ? quiz?.viewed : {}
  const attempts = _.keys(viewed?.content_type_id)

  const current = questions ? questions[index] : {}

  // const {startover, skippable, has_bookmarks} = data.configurations
  const bookmarks = quiz?.bookmarks
  const isBookmarked = _.find(bookmarks, function(o) {
    return o === current?.id
  })

  const [option, setOption] = useState(null)
  const handleOptions = e => {
    setOption(e)
  }

  const options = []
  if (current) {
    _.keys(current).map(key => {
      if (
        _.includes(key, 'distractor') &&
        !_.isNil(current[key]) &&
        !_.isEmpty(current[key])
      )
        options.push(key)
    })
  }
  const handleInitialize = () => {
    const idx = Math.floor(Math.random() * (options.length + 1))
    setCorrect(idx)
  }
  useEffect(() => {
    handleInitialize()
  }, [])
  const answers = [
    ...options.slice(0, correct),
    'correct',
    ...options.slice(correct),
  ]

  const dispatch = useDispatch()
  const handleAnswer = () => {
    if (_.isNil(option) || !data.is_subscribed) return

    const idx =
      option === 'correct' ? 0 : Number(option.replace('distractor', ''))
    const _order = answers.map(item => {
      if (item === 'correct') return '0'
      else return item.replace('distractor', '')
    })
    const order = _.join(_order, '')

    const payload = {
      question: current.id,
      index: option ? idx : -1,
      completed: index > questions.length - 2,
      order,
      time_left: null,
      type: 'Question', // ComprehensiveQuestion
    }
    dispatch(ProActions.postviewquizRequest(data.id, payload))
  }

  const chapters = useSelector(state => state.product.chapters)
  const chapter = chapters[data.ancestry]
  const handleSubmit = () => {
    if (questions.length > index + 1) {
      handleAnswer()
      setIndex(index + 1)
      setOption(null)
    } else {
      handleAnswer()
      dispatch(ProActions.getresultsRequest(Number(data.ancestry)))
      navigation.navigate('Result', {data: chapter})
    }
    handleInitialize()
  }

  const handleNext = e => {
    if (questions.length > index + 1) {
      setIndex(index + 1)
      setOption(null)
    } else {
      dispatch(ProActions.getresultsRequest(Number(data.ancestry)))
      navigation.navigate('Result', {data: chapter})
    }
    handleInitialize()
  }

  const handlePrev = e => {
    if (index > 0) {
      setIndex(index - 1)
      setOption(null)
    }
    handleInitialize()
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

  useEffect(() => {
    if (_.includes(attempts, String(current?.id)) && _.isNil(to)) {
      setIndex(index + 1)
    }
  }, [current])

  useEffect(() => {
    if (!_.isNil(to)) {
      const idx = _.findIndex(questions, function(o) {
        return o.id === to
      })
      setIndex(idx)
    }
  }, [questions])

  let container

  return _.isNil(questions) ? (
    <Loading animated hasBack type="secondary" />
  ) : (
    <ScrollView
      ref={ref => (container = ref)}
      style={styles.container}
      onContentSizeChange={(w, h) =>
        container.scrollTo({x: 0, y: 0, animated: true})
      }
    >
      <View style={styles.content}>
        <Text style={styles.title}>{data.module?.title || data.title}</Text>
        <Progress total={questions.length} current={index + 1} color="green" />
        <View style={{marginBottom: 80}}>
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
            <Text style={styles.question}>{current?.question}</Text>
            <View style={styles.options}>
              {answers.map((key, index) => (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.option,
                    index === answers.length - 1 && {
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                    },
                    mode === 'study'
                      ? key === 'correct'
                        ? option === key && {backgroundColor: Colors.right}
                        : option === key && {backgroundColor: Colors.wrong}
                      : option === key && {backgroundColor: Colors.primary},
                  ]}
                  onPress={() => handleOptions(key)}
                >
                  <Text
                    style={[styles.answer, option === key && {color: 'white'}]}
                  >
                    {current ? current[key] : ''}
                  </Text>
                  {mode === 'study' && (
                    <>
                      {option === key && key === 'correct' && (
                        <Image
                          source={require('~/assets/right.png')}
                          style={styles.right}
                        />
                      )}
                      {option === key && key !== 'correct' && (
                        <Image
                          source={require('~/assets/wrong.png')}
                          style={styles.wrong}
                        />
                      )}
                    </>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </Card>
          {mode === 'study' ? (
            <View>
              <Card style={styles.view}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => setView(!view)}
                >
                  <Text style={styles.explanation}>
                    {view ? 'Hide' : 'View'} explanation
                  </Text>
                  <Image
                    source={require('~/assets/down.png')}
                    style={[styles.down, view && styles.active]}
                  />
                </TouchableOpacity>
                {view && (
                  <Text style={styles.exdesc}>{current.explanation}</Text>
                )}
              </Card>
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
                <Button
                  disabled={index === questions.length - 1}
                  style={styles.rbutton}
                  onPress={handleNext}
                >
                  <Text style={styles.rtitle}>NEXT</Text>
                  <Image
                    source={require('~/assets/arrow.png')}
                    style={styles.rarrow}
                  />
                </Button>
              </View>
            </View>
          ) : (
            <View style={styles.submit}>
              <Button
                disabled={!skippable && _.isNil(option)}
                text="SUBMIT ANSWER"
                onPress={handleSubmit}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default QuizScreen
