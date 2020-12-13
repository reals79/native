import React, {useEffect} from 'react'
import {ScrollView, Text, TouchableOpacity, View, Platform} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {Result} from '~/components'
import ProductActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const ResultScreen = ({route, navigation}) => {
  const data = route.params.data
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.logo}>
          RESULTS
        </Text>
        <Text style={styles.details}>{data.module?.title}</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      height: Platform.OS === 'ios' ? 120 : 102,
    },
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductActions.getquizattemptRequest(data?.module?.id))
  }, [])

  const handleResult = e => {
    navigation.navigate('Detail', {data: e})
    dispatch(ProductActions.getresultRequest(e?.id))
  }

  const attempts = useSelector(state => state.product.attempts)
  const attempt = attempts[(data.module?.id)]
  const results = useSelector(state => state.product.results)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {attempt?.comprehensive && (
          <>
            <Text style={styles.aware}>
              Comprehensive {attempt.comprehensive.title}
            </Text>
            <Text style={styles.attempts}>
              {attempt.comprehensive.attempts} Attempt(s) Last Attempt:{' '}
              {moment(attempt.comprehensive.last_attempt).format(
                'MM/DD/YY [at] HH:mm A',
              )}
            </Text>

            {results[attempt.comprehensive.id]?.map(item => (
              <TouchableOpacity
                style={styles.result}
                onPress={() =>
                  handleResult({
                    ...item,
                    title: attempt.comprehensive.title,
                    parent_id: attempt.comprehensive.id,
                  })
                }
              >
                <Result
                  key={item.id}
                  date={item.viewed_at}
                  right={item.correct_answers}
                  wrong={item.incorrect_answers}
                  skipped={item.unattempted_answers}
                />
              </TouchableOpacity>
            ))}
          </>
        )}
        {attempt?.contents?.map(content => (
          <>
            <Text style={styles.aware}>{content.title}</Text>
            <Text style={styles.attempts}>
              {content.attempts} Attempt(s) Last Attempt:{' '}
              {moment(content.last_attempt).format('MM/DD/YY [at] HH:mm A')}
            </Text>

            {results[content.id]?.map(item => (
              <TouchableOpacity
                style={styles.result}
                onPress={() =>
                  handleResult({
                    ...item,
                    title: content.title,
                    parent_id: content.id,
                  })
                }
              >
                <Result
                  key={item.id}
                  date={item.viewed_at}
                  right={item.correct_answers}
                  wrong={item.incorrect_answers}
                  skipped={item.unattempted_answers}
                />
              </TouchableOpacity>
            ))}
          </>
        ))}
      </ScrollView>
    </View>
  )
}

export default ResultScreen
