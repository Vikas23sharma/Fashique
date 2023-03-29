import { CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE } from './actionTypes';
const initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case CREATE_ACCOUNT_REQUEST:
      return { ...state, isLoading: true }
    case CREATE_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload }
    case CREATE_ACCOUNT_FAILURE:
      return { ...state, isLoading: false, isError: true }
    default:
      return state
  }

}

