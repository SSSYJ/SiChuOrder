import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import totalPriceReducer from "./totalPriceReducer"
import menuReducer from "./menuReducer";
import orderReducer from "./orderReducer";

import { RESET } from "../constants";

const appReducer = combineReducers({
    cart: cartReducer,
    totalPrice: totalPriceReducer,
    menu: menuReducer,
    orders: orderReducer,
})

const rootReducer = (state, action) => {
    if (action.type == RESET) {
        const menu = state;
        state = menu;
    }

    return appReducer(state, action);
}

export default rootReducer;