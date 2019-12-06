// Action types
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'


// Action creators
export const addItem = item => {
    console.log(item)
    return { // Action
        type: ADD_ITEM,
        payload: item
    } 
}