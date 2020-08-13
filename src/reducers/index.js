import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import totalPriceReducer from "./totalPriceReducer"

export default combineReducers({
    order: orderReducer,
    totalPrice: totalPriceReducer
})
