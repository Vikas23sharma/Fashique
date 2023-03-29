
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_TOKEN } from './actionTypes';
const initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  details: [],
  token: ""
}
const reducer = (state = initialstate, { type, payload }) => {

  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true }
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, details: payload }
    case LOGIN_TOKEN:
      return { ...state, isLoading: false, isError: false, isAuth: true, token: payload }
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true }

    default:
      return state
  }

}

export { reducer }