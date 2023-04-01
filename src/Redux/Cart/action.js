import axios from "axios"
import { CART_PRODUCTS_REQUEST, CART_PRODUCTS_SUCCESS, CART_PRODUCTS_FAILURE, } from "./actionTypes"



export const getCartProducts = (token) => (dispatch) => {
    dispatch({ type: CART_PRODUCTS_REQUEST })
    axios
        .get(`http://localhost:8080/users?token=${token}`)
        .then((res) => {
            console.log(res.data[0].cart, "Inside the cart")

            dispatch({ type: CART_PRODUCTS_SUCCESS, payload: res.data[0].cart })

            localStorage.setItem("CartItems", JSON.stringify(res.data[0].cart))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: CART_PRODUCTS_FAILURE })
        })

}
