const INITIAL_STATE = {
    name: '',
    price: '0',
    qty: '0'
} 

export default function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {...state, qty: state.qty + 1} 
    }
    case 'REMOVE_FROM_CART': {
      return {...state, qty: state.qty - 1}
    }
    default: {
      return state
    }
  }
}