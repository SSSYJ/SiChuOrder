import { GET_MENU } from "../constants";

const INITIAL_STATE = []

export default function menuReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_MENU:
            return action.payload
        default:
            return state
    }
}