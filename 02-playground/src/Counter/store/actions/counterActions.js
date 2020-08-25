// Actions

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";

// Action creator
export function onSubstract(value){
    return {
        type: SUBSTRACT_COUNTER,
        value
    }
}