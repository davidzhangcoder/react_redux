import * as actionTypes from './action_types'

export function incrementActionCreator(value) {
    return {type:actionTypes.INCREMENT, data:value};
}

export function decrementActionCreator(value) {
    return {type:actionTypes.DECREMENT, data:value};
}

export const incrementActionAsyncCreator = (value) => {
    return dispatch => {
        setTimeout(
            ()=>{
                dispatch(incrementActionCreator(value))
            }, 3000
        )
    }
}