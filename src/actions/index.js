import { ADD, MINUS, ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

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

export const addToCart = (name, price, qty) => {
    return {
      type: ADD_TO_CART,
      payload: {
        name: name,
        price: price,
        qty: qty
      }
    }
  }

 export const removeFromCart = (name, price, qty) => {
    return {
      type: REMOVE_FROM_CART,
      payload: {
        name: name,
        price: price,
        qty: qty
      }
    }
  }