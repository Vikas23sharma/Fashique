import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./Login/reducer"
import { reducer as JoinRender } from "../Redux/Join/reducer.js"
const rootReducer = combineReducers({
   JoinRender, LoginReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
