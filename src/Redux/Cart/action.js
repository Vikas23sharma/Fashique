import axios from "axios"
import {
    // CART_PRODUCTS_REQUEST, CART_PRODUCTS_SUCCESS, CART_PRODUCTS_FAILURE,
    POST_CART_ITEMS_REQUEST, POST_CART_ITEMS_SUCCESS, POST_CART_ITEMS_FAILURE,
    GET_INITIAL_CART_REQUEST, GET_INITIAL_CART_SUCCESS, GET_INITIAL_CART_FAILURE,
    UPDATED_CART_REQUEST, UPDATED_CART_SUCCESS, UPDATED_CART_FAILURE
} from "./actionTypes"

export const initialCartProducts = () => (dispatch) => {
    dispatch({ type: GET_INITIAL_CART_REQUEST })
    axios
        .get(`https://asos-of6d.onrender.com/cart`)
        .then((res) => {
            console.log(res.data, "initial the cart")
            dispatch({ type: GET_INITIAL_CART_SUCCESS, payload: res.data })
            // localStorage.setItem("CartUserId", JSON.stringify(res.data));
            // localStorage.setItem("CartItems", JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: GET_INITIAL_CART_FAILURE })
        })
}


export const postCartItems = (id, initialcart) => (dispatch) => {
    console.log(initialcart, "hfdjashdjfj")
    // console.log(token,"token---")
    dispatch({ type: POST_CART_ITEMS_REQUEST })
    return axios
        .patch(`https://asos-of6d.onrender.com/users/${id}`,
            { cart: initialcart })
        .then((res) => {
            console.log(res.data, "posting ")
            dispatch({ type: POST_CART_ITEMS_SUCCESS, payload: res.data })
            return res.data
            // localStorage.setItem("CartUserId", JSON.stringify(res.id))
            // localStorage.setItem("CartItems", JSON.stringify(res.cart))
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: POST_CART_ITEMS_FAILURE })

        })
}
// export const getCartProducts = (token) => (dispatch) => {
//     dispatch({ type: CART_PRODUCTS_REQUEST })
//     axios
//         .get(`http://localhost:8080/users?token=${token}`)
//         .then((res) => {
//             // console.log(res.data[0].cart, "Inside the cart")
//             dispatch({ type: CART_PRODUCTS_SUCCESS, payload: res.data[0].cart })
//             localStorage.setItem("CartUserId", JSON.stringify(res.data[0].id))
//             localStorage.setItem("CartItems", JSON.stringify(res.data[0].cart))
//         })
//         .catch((err) => {
//             console.log(err)
//             dispatch({ type: CART_PRODUCTS_FAILURE })
//         })

// }

export const updatedCart = (cartItems, cartUserId) => (dispatch) => {
    console.log(cartItems, "indie")
    console.log(cartUserId, "isdfs")
    dispatch({ type: UPDATED_CART_REQUEST })
    axios.patch(`https://asos-of6d.onrender.com/users/${cartUserId}`, { cart: cartItems })
        .then((res) => {
            console.log(res.data, "shajr ")
            dispatch({ type: UPDATED_CART_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: UPDATED_CART_FAILURE })

        })
}