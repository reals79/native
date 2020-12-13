import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  loginRequest: ['payload', 'message'],
  loginSuccess: ['response'],
  loginFailure: null,

  logoutRequest: ['payload', 'callback'],
  logoutSuccess: null,
  logoutFailure: null,

  registerRequest: ['payload'],
  registerSuccess: ['response'],
  registerFailure: null,

  emailRequest: ['payload'],
  emailSuccess: ['response'],
  emailFailure: null,

  passwordRequest: ['payload'],
  passwordSuccess: ['response'],
  passwordFailure: null,

  forgotpasswordRequest: ['payload'],
  forgotpasswordSuccess: ['response'],
  forgotpasswordFailure: null,

  clearRequest: null,
})

export const AppTypes = Types
export default Creators
