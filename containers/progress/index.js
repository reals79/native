import React, {useEffect} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view'
import moment from 'moment'
import _ from 'lodash'
import {Result} from '~/components'
import ProductActions from '~/actions/product'
import {Colors} from '~/theme'
import styles from './style'

const ProgressScreen = ({route, navigation, theme}) => {
  navigation.setOptions({
    headerTitle: 'RESULTS',
    headerStyle: {
      backgroundColor: Colors.primary,
      shadowColor: Colors.primary,
      height: 100,
    },
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'TradeGothicLTPro-Bold',
      fontSize: 26,
    },
  })

  const progress = useSelector(state => state.product.progress)
  const ids = _.filter(_.keys(progress), function(o) {
    return o !== 'title' && o !== 'hasProgress' && o !== 'hasBookmark'
  })

  const handleDetail = (e, title) => {
    const _data = {...e, title}
    navigation.navigate('Detail', {data: _data})
    dispatch(ProductActions.getresultRequest(e?.id))
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ProductActions.getprogressRequest())
  }, [])

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ScrollableTabView
          renderTabBar={() => (
            <ScrollableTabBar
              activeTextColor={Colors.primary}
              inactiveTextColor={Colors.secondary}
              tabStyle={{
                borderBottomWidth: 2,
                borderBottomColor: Colors.secondary,
              }}
              textStyle={styles.tabTitle}
              underlineStyle={{
                backgroundColor: Colors.primary,
                height: 2,
              }}
            />
          )}
        >
          {ids.map(id => (
            <ScrollView tabLabel={progress[id]?.title} style={{marginTop: 30}}>
              {progress[id]?.hasProgress ? (
                _.keys(progress[id]).map(key => {
                  if (key !== 'title' && key !== 'hasProgress') {
                    const current = progress[id][key]
                    return (
                      <>
                        {!_.isEmpty(current?.attempts?.comprehensive) && (
                          <View style={{marginBottom: 30}}>
                            <Text style={styles.aware}>
                              Comprehensive{' '}
                              {current.title || current.module?.title}
                            </Text>
                            <Text style={styles.attempts}>
                              {current?.attempts?.comprehensive.attempts}{' '}
                              Attempt(s) Last Attempt:{' '}
                              {moment(
                                current?.attempts?.comprehensive.last_attempt,
                              ).format('MM/DD/YY [at] HH:mm A')}
                            </Text>

                            {current.results?.comprehensive?.map(item => (
                              <TouchableOpacity
                                key={item.id}
                                onPress={() =>
                                  handleDetail(
                                    {
                                      ...item,
                                      parent_id:
                                        current.attempts.comprehensive.id,
                                      has_bookmarks: progress[id].hasBookmark,
                                    },
                                    progress[id].title,
                                  )
                                }
                              >
                                <Result
                                  date={item.viewed_at}
                                  right={item.correct_answers}
                                  wrong={item.incorrect_answers}
                                  skipped={item.unattempt_answers || 0}
                                />
                              </TouchableOpacity>
                            ))}
                          </View>
                        )}

                        {current?.attempts?.contents?.map(item => (
                          <View key={item.id} style={{marginBottom: 30}}>
                            <Text style={styles.aware}>{item.title}</Text>
                            <Text style={styles.attempts}>
                              {item.attempts} Attempt(s) Last Attempt:{' '}
                              {moment(item.last_attempt).format(
                                'MM/DD/YY [at] HH:mm A',
                              )}
                            </Text>

                            {current?.results?.contents[item.id]?.map(
                              (pg, index) => (
                                <TouchableOpacity
                                  key={`${item.id}-${index}`}
                                  onPress={() =>
                                    handleDetail(
                                      {
                                        ...pg,
                                        parent_id: item.id,
                                        has_bookmarks: progress[id].hasBookmark,
                                      },
                                      progress[id].title,
                                    )
                                  }
                                >
                                  <Result
                                    key={index}
                                    date={pg.viewed_at}
                                    right={pg.correct_answers}
                                    wrong={pg.incorrect_answers}
                                    skipped={pg.unattempt_answers || 0}
                                  />
                                </TouchableOpacity>
                              ),
                            )}
                          </View>
                        ))}
                      </>
                    )
                  }
                })
              ) : (
                <View style={styles.nosection}>
                  <Text style={styles.notitle}>NO RESULTS YET</Text>
                  <Text style={styles.nodesc}>
                    Take a test to see your progress here
                  </Text>
                </View>
              )}
            </ScrollView>
          ))}
        </ScrollableTabView>
      </View>
    </View>
  )
}

export default ProgressScreen
