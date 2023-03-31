import axios from 'axios'
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from './actionType'

export const getProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://exuberant-pink-jewelry.cyclic.app/men",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for jackets

export const getProductsjackets=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://exuberant-pink-jewelry.cyclic.app/jackets",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//women

export const getProductswomen=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://exuberant-pink-jewelry.cyclic.app/womens",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//shoe

export const getProductsshoe=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://exuberant-pink-jewelry.cyclic.app/shoes",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

