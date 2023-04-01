import { CART_PRODUCTS_REQUEST, CART_PRODUCTS_SUCCESS, CART_PRODUCTS_FAILURE, } from "./actionTypes"
const initialstate = {
  isLoading: false,
  isError: false,
  cartproducts: [],

}
const reducer = (state = initialstate, { type, payload }) => {

  switch (type) {
    case CART_PRODUCTS_REQUEST:
      return { ...state, isLoading: true }
    case CART_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, details: payload }
     case CART_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true }

    default:
      return state
  }

}

export { reducer }