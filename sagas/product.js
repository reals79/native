import {Alert} from 'react-native'
import {put, select} from 'redux-saga/effects'
import RNIap from 'react-native-iap'
import _ from 'lodash'
import ProductActions from '~/actions/product'

export function* getbundlesRequest(api, action) {
  const {id} = action
  const response = yield api.getBundles(id)
  if (response.ok) {
    yield put(ProductActions.getbundlesSuccess(response.data))
  } else {
    console.log('ERROR - getbundlesRequest')
    yield put(ProductActions.getbundlesFailure())
  }
}

export function* getmodulesRequest(api, action) {
  const {id} = action
  const response = yield api.getModules(id)
  if (response.ok) {
    yield put(ProductActions.getmodulesSuccess(response.data))
  } else {
    console.log('ERROR - getmodulesRequest')
    yield put(ProductActions.getmodulesFailure())
  }
}

export function* getcomprehensiveRequest(api, action) {
  const {id, mode = 'Quiz'} = action
  const response = yield api.getComprehensive(id, mode)

  if (response.ok) {
    const {questions, viewed, bookmarks} = response.data
    yield put(
      ProductActions.getcomprehensiveSuccess({questions, viewed, bookmarks}),
    )
  } else {
    console.log('ERROR - getcomprehensiveRequest')
    yield put(ProductActions.getcomprehensiveFailure())
  }
}

export function* getchapterRequest(api, action) {
  const {id} = action
  const response = yield api.getQuiz(id)

  if (response.ok) {
    yield put(ProductActions.getchapterSuccess(response.data))
  } else {
    console.log('ERROR - getchapterRequest', response)
    yield put(ProductActions.getchapterFailure())
  }
}

export function* getbookmarkRequest(api, action) {
  const {id} = action
  const response = yield api.getBookmark(id)

  if (response.ok) {
    const bookmarks = {
      actable_type: response.data.actable_type,
      bookmarked_contents: response.data.bookmarked_contents,
      content_type_ids: response.data.content_type_ids,
    }
    yield put(ProductActions.getbookmarkSuccess(id, bookmarks))
  } else {
    console.log('ERROR - getbookmarkRequest')
    yield put(ProductActions.getbookmarkFailure())
  }
}

export function* getresultRequest(api, action) {
  const {id} = action
  const response = yield api.getResult(id)

  if (response.ok) {
    yield put(ProductActions.getresultSuccess(id, response.data.result))
  } else {
    console.log('ERROR - getresultRequest')
    yield put(ProductActions.getresultFailure())
  }
}

export function* getresultsRequest(api, action) {
  const {id} = action
  const response = yield api.getResults(id)

  if (response.ok) {
    yield put(ProductActions.getresultsSuccess(id, response.data.results))
  } else {
    console.log('ERROR - getresultsRequest')
    yield put(ProductActions.getresultsFailure())
  }
}

export function* getquizRequest(api, action) {
  const {id} = action
  const response = yield api.getQuiz(id)

  if (response.ok) {
    yield put(ProductActions.getquizSuccess(response.data))
  } else {
    console.log('ERROR - getquizRequest')
    yield put(ProductActions.getquizFailure())
  }
}

export function* getquizattemptRequest(api, action) {
  const {id} = action
  const response = yield api.getQuizAttempt(id)

  if (response.ok) {
    yield put(ProductActions.getquizattemptSuccess(id, response.data.attempts))
    if (response.data.attempts.comprehensive) {
      yield put(
        ProductActions.getresultsRequest(
          response.data.attempts.comprehensive.id,
        ),
      )
    }
    if (response.data.attempts.contents.length > 0) {
      for (item of response.data.attempts.contents) {
        yield put(ProductActions.getresultsRequest(item.id))
      }
    }
  } else {
    console.log('ERROR - getquizattemptRequest')
    yield put(ProductActions.getquizattemptFailure())
  }
}

export function* postbookmarkRequest(api, action) {
  const {id, payload, sync} = action
  const response = yield api.postBookmarks(id, payload)

  if (response.ok) {
    yield put(ProductActions.postbookmarkSuccess(id, response.data))
    if (sync) yield put(ProductActions.getbookmarkRequest(sync))
  } else {
    console.log('ERROR - postbookmarkRequest')
    yield put(ProductActions.postbookmarkFailure())
  }
}

export function* postviewquizRequest(api, action) {
  const {id, payload} = action
  const response = yield api.postViewQuiz(id, payload)

  if (response.ok) {
    yield put(ProductActions.postviewquizSuccess(response.data))
  } else {
    console.log('ERROR - postviewquizRequest')
    yield put(ProductActions.postviewquizFailure())
  }
}

export function* getprogressRequest(api, action) {
  try {
    const bundle = yield select(state => state.product.bundle)
    const unsubscribed = bundle.unsubscribed || []
    const subscribed = bundle.subscribed || []
    const progress = {}

    for (item of unsubscribed) {
      const modules = yield api.getModules(item.slug)
      progress[item.slug] = {
        title: item.title,
        hasProgress: false,
        hasBookmark: false,
      }
      if (modules.ok) {
        const mds =
          modules.data?.product?.modules ||
          modules.data?.product?.auditable_modules ||
          []
        for (md of mds) {
          progress[item.slug][md.module.id] = {}
          progress[item.slug][md.module.id].module = md.module
          const attempts = yield api.getQuizAttempt(md.module?.id)
          if (attempts.ok) {
            progress[item.slug][md.module.id].attempts = attempts.data.attempts
            progress[item.slug][md.module.id].results = {
              comprehensive: {},
              contents: {},
            }
            if (attempts.data.attempts?.comprehensive) {
              progress[item.slug].hasProgress = true
              const results = yield api.getResults(
                attempts.data.attempts?.comprehensive.id,
              )
              if (results.ok) {
                progress[item.slug][md.module.id].results.comprehensive =
                  results.data.results
              }
            }
            if (attempts.data.attempts.contents.length > 0) {
              progress[item.slug].hasProgress = true
              for (attempt of attempts.data.attempts.contents) {
                const results = yield api.getResults(attempt.id)
                if (results.ok) {
                  progress[item.slug][md.module.id].results.contents[
                    attempt.id
                  ] = results.data.results
                }
              }
            }
          }
        }
      }
    }

    for (item of subscribed) {
      const modules = yield api.getModules(item.slug)
      progress[item.slug] = {
        title: item.title,
        hasProgress: false,
        hasBookmark: true,
      }
      if (modules.ok) {
        // progress[item.slug].hasBookmark =
        //   modules.data.product.configurations?.has_bookmarks
        const mds =
          modules.data?.product?.modules ||
          modules.data?.product?.auditable_modules ||
          []
        for (md of mds) {
          progress[item.slug][md.module.id] = {}
          progress[item.slug][md.module.id].module = md.module
          const attempts = yield api.getQuizAttempt(md.module?.id)
          if (attempts.ok) {
            progress[item.slug][md.module.id].attempts = attempts.data.attempts
            progress[item.slug][md.module.id].results = {
              comprehensive: {},
              contents: {},
            }
            if (attempts.data.attempts?.comprehensive) {
              progress[item.slug].hasProgress = true
              const results = yield api.getResults(
                attempts.data.attempts?.comprehensive.id,
              )
              if (results.ok) {
                progress[item.slug][md.module.id].results.comprehensive =
                  results.data.results
              }
            }
            if (attempts.data.attempts.contents.length > 0) {
              progress[item.slug].hasProgress = true
              for (attempt of attempts.data.attempts.contents) {
                const results = yield api.getResults(attempt.id)
                if (results.ok) {
                  progress[item.slug][md.module.id].results.contents[
                    attempt.id
                  ] = results.data.results
                }
              }
            }
          }
        }
      }
    }

    yield put(ProductActions.getprogressSuccess(progress))
  } catch (e) {
    console.log('ERROR - getprogressFailure')
    yield put(ProductActions.getprogressFailure())
  }
}

export function* subscribeiosRequest(api, action) {
  const {payload, callback} = action
  try {
    const result = yield RNIap.initConnection()
    if (result) {
      const products = yield RNIap.getProducts(payload.iapProductIDs)
      if (products.length === 0) {
        Alert.alert('Code3Apps', `Couldn't find the product.`, [
          {text: 'Ok', onPress: () => {}},
        ])
        yield put(ProductActions.subscribeiosFailure())
        return
      }
      const purchase = yield RNIap.requestPurchase(payload.productId)
      if (!purchase) {
        Alert.alert('Code3Apps', 'Purchase failed.', [
          {text: 'Ok', onPress: () => {}},
        ])
        yield put(ProductActions.subscribeiosFailure())
        return
      }

      const receiptInfo = {
        receipt_data: purchase.transactionReceipt,
        transaction_id: purchase.transactionId,
      }

      const response = yield api.postSubscribe(payload.productID, receiptInfo)
      if (response.ok) {
        yield callback()
        yield put(ProductActions.subscribeiosSuccess())
      } else {
        yield put(ProductActions.subscribeiosFailure())
      }
    } else {
      Alert.alert('Code3Apps', `Couldn't instantiate the connection.`, [
        {text: 'Ok', onPress: () => {}},
      ])
      yield put(ProductActions.subscribeiosFailure())
    }
  } catch (e) {
    // Alert.alert('Code3Apps', 'Subscription has failed. Please try again.', [
    //   {text: 'Ok', onPress: () => {}},
    // ])
    Alert.alert('Code3Apps', e + ' ' + payload.productId, [
      {text: 'Ok', onPress: () => {}},
    ])
    yield put(ProductActions.subscribeiosFailure())
  }
}

export function* subscribeardRequest(api, action) {
  const {payload} = action
  // const result = yield RNIap.initConnection()
  // yield RNIap.consumeAllItemsAndroid()
  yield put(ProductActions.subscribeardSuccess())
}

export function* getallcontentsRequest(api, action) {
  const {id} = action
  const response = yield api.getAllContents(id)
  if (response.ok) {
    yield put(ProductActions.getallcontentsSuccess(response.data))
  } else {
    yield put(ProductActions.getallcontentsFailure())
  }
}

export function* getallquestionsRequest(api, action) {
  const {id} = action
  const response = yield api.getAllQuestions(id)
  if (response.ok) {
    yield put(
      ProductActions.getallquestionsSuccess(id, response.data.questions),
    )
  } else {
    yield put(ProductActions.getallquestionsFailure())
  }
}
