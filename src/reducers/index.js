import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import testReducer from "./testReducer";

export default combineReducers({
    order: orderReducer,
    test: testReducer
})
