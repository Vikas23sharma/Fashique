import {
  GET_USERADDRESS_FAILURE, GET_USERADDRESS_REQUEST, GET_USERADDRESS_SUCCESS,
  POST_USERADDRESS_FAILURE, POST_USERADDRESS_REQUEST, POST_USERADDRESS_SUCCESS,

} from './actionTypes';
const initialstate = {
  isLoading: false,
  isError: false,
  userdetails: [],
  
}
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case POST_USERADDRESS_REQUEST:
      return { ...state, isLoading: true }
    case POST_USERADDRESS_SUCCESS:
      return { ...state, isLoading: false, userdetails: payload }


    case GET_USERADDRESS_REQUEST:
      return { ...state, isLoading: true }
    case GET_USERADDRESS_SUCCESS:
      return { ...state, isLoading: false, userdetails: payload }

 

    case GET_USERADDRESS_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case POST_USERADDRESS_FAILURE:
      return { ...state, isLoading: false, isError: true }
 
    default:
      return state
  }

}

