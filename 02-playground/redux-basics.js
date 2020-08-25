// import {} from 'redux';

const { createStore } = require("redux");

// Reducer

const initialState = {
    counter : 101
}
const rootReducer = (state = initialState, action) => {
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter -1
        }
    }else if(action.type === "ADD"){
        return {
            counter : state.counter + action.data
        }
    }
    return state;
}

// Create Store

const store = createStore(rootReducer);

console.log("State : ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("SUBSCRIBE : ", store.getState());
})


// Dispatch Action
store.dispatch({type: "INCREMENT" })

// console.log("After INCREMENT Action : ", store.getState());

store.dispatch({type : "DECREMENT"})

// console.log("After DECREMENT Action : ", store.getState());

store.dispatch({type : "ADD", data : 10})

// console.log("After ADD Action : ", store.getState());

