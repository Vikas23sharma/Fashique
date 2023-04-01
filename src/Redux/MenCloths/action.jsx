import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"

// Men Products
export const getMenProduct = (paramObj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
   axios
     .get(`https://asos-of6d.onrender.com/men`, paramObj)
     .then((res) => {
       console.log(res);
       dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
     })
     .catch(() => {
       dispatch({ type: GET_PRODUCT_FAILURE });
     });
}

// shoes

export const getShoes = (paramObj) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`https://asos-of6d.onrender.com/shoes`, paramObj)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};


// Jackets 
export const getMenJacket = (paramObj) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`https://asos-of6d.onrender.com/jackets`, paramObj)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};

// Women 
export const getWomenProduct = (paramObj) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`https://asos-of6d.onrender.com/womens`, paramObj)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};

// Post request to wishlist
