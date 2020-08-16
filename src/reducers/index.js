import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import totalPriceReducer from "./totalPriceReducer"
import menuReducer from "./menuReducer";

export default combineReducers({
    order: orderReducer,
    totalPrice: totalPriceReducer,
    menu: menuReducer,
})
