import { ADD_TO_CART, REMOVE_FROM_CART, RESET } from "../constants";

const INITIAL_STATE = [
    {
        name: 'test',
        price: 0,
        qty: 0,
    }
];

export default function orderReducer(state = INITIAL_STATE, action) {
    console.log(action.payload)
    console.log(action.type)
    console.log(state)
    var name = '';
    if (action.payload) {
        name = action.payload.name
    }
    const menuItemIndex = state.findIndex((e) => e.name === name);
    console.log(menuItemIndex)
    if (menuItemIndex !== -1) {
        // If item exist 
        return state.map((item, index) => {
            if (index !== menuItemIndex) {
                return item
            }
            switch (action.type) {
                case ADD_TO_CART: {
                    return { ...item, qty: item.qty + 1 }
                }
                case REMOVE_FROM_CART: {
                    if (item.qty > 0) {
                        return { ...item, qty: item.qty - 1 }
                    }
                    return item
                }
                default:
                    return item
            }

        })
    } else {
        switch (action.type) {
            case RESET:
                return []
            case ADD_TO_CART: {
                return [
                    ...state,
                    {
                        ...action.payload,
                        qty: 1
                    }
                ]
            }
            case REMOVE_FROM_CART: {
                return state
            }
            default:
                return state
        }
    }
}