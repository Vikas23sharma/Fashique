import {
  GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS,
  POST_USER_CRED_REQUEST, POST_USER_CRED_SUCCESS, POST_USER_CRED_FAILURE
} from './actionTypes';
const initialstate = {
  isLoading: false,
  isError: false,
  useraccountcredentials: "",
  checkoutProducts:[]
}
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {

    case POST_USER_CRED_REQUEST:
      return { ...state, isLoading: true }
    case POST_USER_CRED_SUCCESS:
      return { ...state, isLoading: false, useraccountcredentials: payload }
      
    case GET_USER_CART_REQUEST:
      return { ...state, isLoading: true }
    case GET_USER_CART_SUCCESS:
      return { ...state, isLoading: false, checkoutProducts: payload }

    case GET_USER_CART_FAILURE:
      return { ...state, isLoading: false, isError: true }

    case POST_USER_CRED_FAILURE:
      return { ...state, isLoading: false, isError: true }

    default:
      return state
  }

}

