import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  getbundlesRequest: ['id'],
  getbundlesSuccess: ['response'],
  getbundlesFailure: null,

  getmodulesRequest: ['id'],
  getmodulesSuccess: ['response'],
  getmodulesFailure: null,

  getcomprehensiveRequest: ['id', 'mode'],
  getcomprehensiveSuccess: ['response'],
  getcomprehensiveFailure: null,

  getchapterRequest: ['id'],
  getchapterSuccess: ['response'],
  getchapterFailure: null,

  getbookmarkRequest: ['id'],
  getbookmarkSuccess: ['id', 'response'],
  getbookmarkFailure: null,

  getresultRequest: ['id'],
  getresultSuccess: ['id', 'response'],
  getresultFailure: null,

  getresultsRequest: ['id'],
  getresultsSuccess: ['id', 'response'],
  getresultsFailure: null,

  getquizRequest: ['id'],
  getquizSuccess: ['response'],
  getquizFailure: null,

  getquizattemptRequest: ['id'],
  getquizattemptSuccess: ['id', 'response'],
  getquizattemptFailure: null,

  postbookmarkRequest: ['id', 'payload', 'sync'],
  postbookmarkSuccess: ['id', 'response'],
  postbookmarkFailure: null,

  postviewquizRequest: ['id', 'payload'],
  postviewquizSuccess: ['response'],
  postviewquizFailure: null,

  getprogressRequest: null,
  getprogressSuccess: ['response'],
  getprogressFailure: null,

  subscribeiosRequest: ['payload', 'callback'],
  subscribeiosSuccess: ['response'],
  subscribeiosFailure: null,

  subscribeardRequest: ['payload'],
  subscribeardSuccess: ['response'],
  subscribeardFailure: null,

  getallcontentsRequest: ['id'],
  getallcontentsSuccess: ['id', 'response'],
  getallcontentsFailure: null,

  getallquestionsRequest: ['id'],
  getallquestionsSuccess: ['id', 'response'],
  getallquestionsFailure: null,

  clearRequest: null,
})

export const ProductTypes = Types
export default Creators
