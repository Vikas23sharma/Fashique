import axios from "axios"
import {
    CART_PRODUCTS_REQUEST, CART_PRODUCTS_SUCCESS, CART_PRODUCTS_FAILURE,
    UPDATED_CART_REQUEST, UPDATED_CART_SUCCESS, UPDATED_CART_FAILURE
} from "./actionTypes"



export const getCartProducts = (token) => (dispatch) => {
    dispatch({ type: CART_PRODUCTS_REQUEST })
    axios
        .get(`http://localhost:8080/users?token=${token}`)
        .then((res) => {
            console.log(res.data[0].cart, "Inside the cart")
            dispatch({ type: CART_PRODUCTS_SUCCESS, payload: res.data[0].cart })
            localStorage.setItem("CartUserId", JSON.stringify(res.data[0].id))
            localStorage.setItem("CartItems", JSON.stringify(res.data[0].cart))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: CART_PRODUCTS_FAILURE })
        })

}


export const updatedCart = (cartItems, cartUserId) => (dispatch) => {
    console.log(cartItems, "indie")
    console.log(cartUserId,"isdfs")
    dispatch({ type: UPDATED_CART_REQUEST })
    axios.patch(`http://localhost:8080/users/${cartUserId}`, { cart: cartItems })
        .then((res) => {
            console.log(res.data, "shajr ")
            dispatch({ type: UPDATED_CART_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: UPDATED_CART_FAILURE })

        })
}