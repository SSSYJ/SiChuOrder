import { ADD, MINUS } from '../constants'

const  INITIAL_STATE = 0

export default function testReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD:
            return state + 1
        case MINUS:
            return state - 1
        default:
            return state
    }
}