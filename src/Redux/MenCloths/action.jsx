import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"


export const getMenProduct = (paramObj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
   axios.get(`https://exuberant-pink-jewelry.cyclic.app/men`,paramObj)
   .then((res)=>{console.log(res);dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})})
   .catch(()=>{dispatch({type:GET_PRODUCT_FAILURE})})
}