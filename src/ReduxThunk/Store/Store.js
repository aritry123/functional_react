import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./Reducers/UserReducer";
let initialState={

}
const Store=createStore(UserReducer,initialState,applyMiddleware(thunk))
export default Store