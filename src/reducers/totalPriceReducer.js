import { ADD_TO_CART, REMOVE_FROM_CART, RESET } from "../constants";

export default function totalPriceReducer(state = 0, action) {
  switch (action.type) {
    case RESET :
        return 0.00
    case ADD_TO_CART: {
        return (Number(state) + action.payload.price).toFixed(2)
    }
    case REMOVE_FROM_CART: {
        if (action.payload.qty > 0) {
          return (Number(state) - action.payload.price).toFixed(2)
        }
        else{
          return Number(state).toFixed(2)
        }
    }
    default: {
        return Number(state).toFixed(2)
    }
  }
}