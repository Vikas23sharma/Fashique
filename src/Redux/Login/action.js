import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_TOKEN } from "./actionTypes"



export const getUserDetails = (token) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    axios
        .get(`https://exuberant-pink-jewelry.cyclic.app/users`)
        .then((res) => {
            // console.log(res.data, "Inside the login")
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            localStorage.setItem("UserDetails", JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE })
        })

}
export const login_in = (token) => (dispatch) => {
    // console.log(token,"isdjfjsdf")
    if (token !== "" || token === undefined || token === null) {
        dispatch({ type: LOGIN_TOKEN, payload: token })
    }else{
        // alert()
    }
}