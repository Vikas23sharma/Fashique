import axios from 'axios'
import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from './actionType'

//men
export const getProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://asos-of6d.onrender.com/men",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for jackets

export const getProductsjackets=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://asos-of6d.onrender.com/jackets",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//women

export const getProductswomen=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://asos-of6d.onrender.com/womens",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//shoe

export const getProductsshoe=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://asos-of6d.onrender.com/shoes",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for post men product

export const addProductMen=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.post("https://asos-of6d.onrender.com/men",data).then((res)=>{
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

// for post men product to endpoint product

export const addProductMenToProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.post("https://asos-of6d.onrender.com/products",data).then((res)=>{
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for edit men product
// export const editProduct=(dataObj,id)=>(dispatch)=>{
//     dispatch({type:PRODUCT_REQUEST})

//     return axios.patch(`https://exuberant-pink-jewelry.cyclic.app/men/${id}`,dataObj)
//     .then((res)=>{
//        dispatch({type:PATCH_PRODUCT_SUCCESS})
//     })
//     .catch(()=>{
//        dispatch({type:PRODUCT_FAILURE})
//     })
// }
