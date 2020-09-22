import { ADD, MINUS, ADD_TO_CART, REMOVE_FROM_CART, SWITCH_TAB, BASE_URL, GET_MENU, GET_ORDERS, GET_ONE_ORDER, RESET } from '../constants'

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

export const addToCart = (name, price, qty) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      name: name,
      price: price,
      qty: qty
    }
  })
}


export const removeFromCart = (name, price, qty) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      name: name,
      price: price,
      qty: qty
    }
  })
}

export const switchTab = (value) => {
  return {
    type: SWITCH_TAB,
    payload: value,
  }
}

export const getMenu = () => (dispatch) => {
  var Fly = require("../../wx")
  var fly = new Fly
  fly.get(`${BASE_URL}/api/menu/`).then(res => {
    dispatch({
      type: GET_MENU,
      payload: res.data
    })
  }).catch(err => console.log(err))
}

// userid!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const getOrders = () => dispatch => {
  var Fly = require("../../wx")
  var fly = new Fly
  fly.get(`${BASE_URL}/api/orders/`).then(res => {
    dispatch({
      type: GET_ORDERS,
      payload: res.data
    })
  }).catch(err => console.log(err))
}

export const reset = () => {
  return {
    type: RESET
  }
}