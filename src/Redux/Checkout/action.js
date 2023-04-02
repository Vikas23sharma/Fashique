import axios from "axios";
import {
    GET_USER_CART_FAILURE, GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS,
    POST_USER_CRED_REQUEST, POST_USER_CRED_SUCCESS, POST_USER_CRED_FAILURE
} from "./actionTypes";

export const getUserCart = (token) => (dispatch) => {
 
    dispatch({ type: GET_USER_CART_REQUEST })
    axios
        .get(`http://localhost:8080/users?token=${token}`)
        .then((res) => {
            console.log(res.data, "shajr ")
            dispatch({ type: GET_USER_CART_SUCCESS, payload: res.data[0].cart })
            // localStorage.setItem("CartItems", JSON.stringify(res.data[0].cart))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: GET_USER_CART_FAILURE })
        })
}






export const patchUserCred = (userCred, userId) => (dispatch) => {
    //     console.log(values,"jdbfasdfjsgh")
    // console.log(userId,"insidedsfasdfasdf")
    dispatch({ type: POST_USER_CRED_REQUEST })
    axios.patch(`http://localhost:8080/users/${userId}`, { useraccountcredentials: userCred })
        .then((res) => {
            console.log(res.data, "shajr ")
            dispatch({ type: POST_USER_CRED_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: POST_USER_CRED_FAILURE })

        })
}