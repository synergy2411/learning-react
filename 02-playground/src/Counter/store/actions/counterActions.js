// Actions

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_ITEM = "DELETE_ITEM";

// Action creator
export function onSubstract(value){
    return {
        type: SUBSTRACT_COUNTER,
        value
    }
}

export function onDeleteItem(item){
    return {
        type : DELETE_ITEM,
        item
    }
}