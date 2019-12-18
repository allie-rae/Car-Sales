// Action types
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'


// Action creators
export const addItem = item => {
    return { // Action
        type: ADD_ITEM,
        payload: item
    }
}

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}