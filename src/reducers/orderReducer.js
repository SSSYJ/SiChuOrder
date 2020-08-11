import itemReducer from "./ItemReducer";

const INITIAL_STATE = [
    {
        name: '',
        price: 0,
        qty: 0,
    } 
];

export default function orderReducer(state = INITIAL_STATE, action) {
    const name = action.payload;
    const menuItemIndex = state.findIndex((e) => e.name === name);
    
    if (menuItemIndex) {
        // If item exist in order
        return state.map((item, index) => {
            if (index !== menuItemIndex) {
                return item
            }
        
            return itemReducer(item, action)
        })
    
        // state = [
        //     ...state.slice(0, menuItemIndex),
        //     itemReducer(state[menuItemIndex], action),
        //     ...state.slice(menuItemIndex+1, state.length)
        // ]
        // return state;
    } else {
        if (action.type === 'REMOVE_FROM_CART') {
            return state;
        }
        return [
            ...state,
            {
                ...action.payload,
                qty: 1
            }
        ]
    }
}