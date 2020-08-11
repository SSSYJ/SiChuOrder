import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

export default function totalPriceReducer(state = 0, action) {
  switch (action.type) {
    case ADD_TO_CART: {
        return state + action.payload.price
    }
    case REMOVE_FROM_CART: {
        if (action.payload.qty > 0) {
          console.log(action.payload.qty)
          return state - action.payload.price
        }
        else{
          return state
        }
    }
    default: {
        return state
    }
  }
}