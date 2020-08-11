import { ADD, MINUS, ADD_TO_CART, REMOVE_FROM_CART, SWITCH_TAB } from '../constants'

export const increment = () => {
    return {
        type: ADD
    }
}

export const decrement = () => {
    return {
        type: MINUS
    }
}

export const addToCart = (name, price) => {
    return {
      type: ADD_TO_CART,
      payload: {
        name: name,
        price: price,
      }
    }
  }

export const removeFromCart = (name, price) => {
    return {
      type: REMOVE_FROM_CART,
      payload: {
        name: name,
        price: price,
      }
    }
}

export const switchTab = (value) => {
  return {
    type: SWITCH_TAB,
    payload: value,
  }
}