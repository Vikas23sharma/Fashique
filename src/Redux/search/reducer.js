import { GET_SEARCH_BTN, GET_SEARCH_DATA } from "./actionType";

const initialState = {
    search : 'Type here',
    btn : 0
}

export const reducer = (state = initialState,{type,payload}) =>{
switch (type){
case GET_SEARCH_DATA:
    return {...state,search:payload}
case GET_SEARCH_BTN:
    return {...state,btn:state.btn+payload}
default:
    return state
}

}