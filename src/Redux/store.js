import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./Login/reducer"
import { reducer as JoinRender } from "../Redux/Join/reducer.js"
import {reducer as MenCloths} from "../Redux/MenCloths/reducer";
import {reducer as SearchReducer} from "../Redux/search/reducer";
import {reducer as AdminProduct} from '../Redux/AdminProduct/reducer'

const rootReducer = combineReducers({
   JoinRender, LoginReducer,MenCloths,AdminProduct,SearchReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
