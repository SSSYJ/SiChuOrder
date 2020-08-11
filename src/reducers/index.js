import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import testReducer from "./testReducer";
import totalPriceReducer from "./totalPriceReducer"

export default combineReducers({
    order: orderReducer,
    test: testReducer,
    totalPrice: totalPriceReducer
})
