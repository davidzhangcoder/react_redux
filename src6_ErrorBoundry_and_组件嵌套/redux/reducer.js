import {INCREMENT, DECREMENT} from './action_types'

const defaultState = {
    count: 0
}
export function count(state = defaultState, action) {
    console.log('reducer - count()', state, action)
    switch (action.type) {
        case INCREMENT:{
            const newState = JSON.parse(JSON.stringify(state))
            newState.count = state.count + action.data
            return newState;
        }
        case DECREMENT:{
            const newState = JSON.parse(JSON.stringify(state))
            newState.count = state.count - action.data
            return newState;
        }
        default:
            return state
    }
}