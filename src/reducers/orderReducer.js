import {GET_ORDERS} from '../constants'

const INITIAL_STATE = []

export default function orderReducer(state=INITIAL_STATE, action){
  switch (action.type) {
    case GET_ORDERS:
        return action.payload
    default:
        return state
  }
}