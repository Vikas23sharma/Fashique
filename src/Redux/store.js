import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./Login/reducer"
import { reducer as JoinRender } from "../Redux/Join/reducer.js"
import {reducer as MenCloths} from "../Redux/MenCloths/reducer";


const rootReducer = combineReducers({
   JoinRender, LoginReducer,MenCloths
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
