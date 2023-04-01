import { GET_SEARCH_BTN, GET_SEARCH_DATA } from "./actionType"

export const getSearch = (search) => (dispatch) =>{
dispatch({type:GET_SEARCH_DATA,payload:search})
}
export const getSearchBtn = (searchBtn) => (dispatch) =>{
dispatch({type:GET_SEARCH_BTN,payload:searchBtn})
}
