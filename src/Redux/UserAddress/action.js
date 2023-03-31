import axios from "axios";
import { GET_USERADDRESS_FAILURE, GET_USERADDRESS_REQUEST, GET_USERADDRESS_SUCCESS, POST_USERADDRESS_FAILURE, POST_USERADDRESS_REQUEST, POST_USERADDRESS_SUCCESS } from "./actionTypes";




export const patchUserAddress = (values, userId) => (dispatch) => {
    //     console.log(values,"jdbfasdfjsgh")
    // console.log(userId,"insidedsfasdfasdf")
    dispatch({ type: POST_USERADDRESS_REQUEST })
    axios.patch(`https://exuberant-pink-jewelry.cyclic.app/users/${userId}`, { useraddress: values })
        .then((res) => {
            console.log(res.data, "shajr ")
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
        .get(`https://exuberant-pink-jewelry.cyclic.app/users`)
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
