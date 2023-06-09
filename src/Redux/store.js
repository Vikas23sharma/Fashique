import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./Login/reducer"
import { reducer as JoinRender } from "../Redux/Join/reducer.js"
import { reducer as MenCloths } from "../Redux/MenCloths/reducer";
import { reducer as SearchReducer } from "../Redux/search/reducer";
import { reducer as AdminProduct } from '../Redux/AdminProduct/reducer'
import { reducer as UserAddress } from "../Redux/UserAddress/reducer"
import { reducer as CartProducts } from "../Redux/Cart/reducer"
import { reducer as CheckoutReducer } from "../Redux/Checkout/reducer";

const rootReducer = combineReducers({
   JoinRender, LoginReducer, MenCloths, AdminProduct,
    SearchReducer, UserAddress, CartProducts, CheckoutReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
