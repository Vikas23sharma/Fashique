import {  ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

const initialState = {
    isLoading:false,
    isError:false,
    products:[]
}

export const reducer =(state=initialState,{type,payload})=>{

    switch(type){
        case PRODUCT_REQUEST:
            return{...state,isLoading:true} 
        case ADD_PRODUCT_SUCCESS:
             return {...state, isLoading:false}    
        case GET_PRODUCT_SUCCESS:
            return{...state,isLoading:false,products:payload} 
        case PRODUCT_FAILURE:
            return{...state,isLoading:false,isError:true} 
        case PATCH_PRODUCT_SUCCESS:
            return {...state, isLoading:false}    
        default :
             return state;        
    }
}