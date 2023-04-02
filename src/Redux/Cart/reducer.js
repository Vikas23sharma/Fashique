import {
  CART_PRODUCTS_REQUEST, CART_PRODUCTS_SUCCESS, CART_PRODUCTS_FAILURE,
  GET_INITIAL_CART_REQUEST, GET_INITIAL_CART_SUCCESS, GET_INITIAL_CART_FAILURE,
  POST_CART_ITEMS_REQUEST, POST_CART_ITEMS_SUCCESS, POST_CART_ITEMS_FAILURE,

} from "./actionTypes"



const initialstate = {
  isLoading: false,
  isError: false,
  cartproducts: [],
  initialcart: []

}
const reducer = (state = initialstate, { type, payload }) => {

  switch (type) {


    case GET_INITIAL_CART_REQUEST:
      return { ...state, isLoading: true }
    case GET_INITIAL_CART_SUCCESS:
      return { ...state, isLoading: false, initialcart: payload }
      
    case POST_CART_ITEMS_REQUEST:
      return { ...state, isLoading: true }
    case POST_CART_ITEMS_SUCCESS:
      return { ...state, isLoading: false, cartproducts: payload }

    case GET_INITIAL_CART_FAILURE:
      return { ...state, isLoading: false, isError: true }

    case POST_CART_ITEMS_FAILURE:
      return { ...state, isLoading: false, isError: true }
    default:
      return state
  }

}

export { reducer }