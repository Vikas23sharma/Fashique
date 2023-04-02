import axios from "axios";
import {
    GET_USERADDRESS_FAILURE, GET_USERADDRESS_REQUEST, GET_USERADDRESS_SUCCESS,
    POST_USERADDRESS_FAILURE, POST_USERADDRESS_REQUEST, POST_USERADDRESS_SUCCESS,
    POST_USER_CRED_REQUEST, POST_USER_CRED_SUCCESS, POST_USER_CRED_FAILURE
} from "./actionTypes";




export const patchUserAddress = (values, userId) => (dispatch) => {
    //     console.log(values,"jdbfasdfjsgh")
    // console.log(userId,"insidedsfasdfasdf")
    dispatch({ type: POST_USERADDRESS_REQUEST })
    axios.patch(`https://asos-of6d.onrender.com/users/${userId}`, { useraddress: values })
        .then((res) => {
            // console.log(res.data, "shajr ")
            dispatch({ type: POST_USERADDRESS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: POST_USERADDRESS_FAILURE })

        })
}

export const getUserCred = () => (dispatch) => {
    //     console.log(values,"jdbfasdfjsgh")
    // console.log(userId,"insidedsfasdfasdf")
    dispatch({ type: GET_USERADDRESS_REQUEST })
    axios
        .get(`https://asos-of6d.onrender.com/users`)
        .then((res) => {
            console.log(res.data, "shajr ")
            dispatch({ type: GET_USERADDRESS_SUCCESS, payload: res.data })
            localStorage.setItem("UserDetails", JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: GET_USERADDRESS_FAILURE })
        })
}

