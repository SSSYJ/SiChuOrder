import { ADD, MINUS } from '../constants'

export const increment = () => {
    return {
        type: 'ADD'
    }
}

export const decrement = () => {
    return {
        type: 'MINUS'
    }
}