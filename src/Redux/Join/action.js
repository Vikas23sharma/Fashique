import axios from "axios";
import { CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS } from "./actionTypes";

export const createAccount = (values) => (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT_REQUEST })
    axios
        .post(`https://asos-of6d.onrender.com/users`, values)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: CREATE_ACCOUNT_FAILURE })
        })
}