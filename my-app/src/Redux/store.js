import { CustomerReducer } from "./Customer_Reducer/CustomereReducer";
import {legacy_createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"


const rootReducer = combineReducers({CustomerReducer})
const store = legacy_createStore(rootReducer , applyMiddleware(thunk))

export {store}