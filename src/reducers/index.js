import { combineReducers } from "redux";
import itemReducer from "./ItemReducer";
import orderReducer from "./orderReducer";
import testReducer from "./testReducer";

export default combineReducers({
    // item: itemReducer,
    // order: orderReducer,
    test: testReducer
})
