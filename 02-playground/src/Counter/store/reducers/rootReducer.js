import * as counterActions from "../actions/counterActions";

const initialState = {
  counter: 99,
  results: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case counterActions.INCREMENT: {
      return {
        ...state, // => {counter , results}
        counter: state.counter + 1,
      };
    }
    case counterActions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case counterActions.ADD_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case counterActions.SUBSTRACT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    case counterActions.STORE_RESULT: {
      return {
        ...state,
        results: [...state.results.concat(state.counter)],
      };
    }
    case counterActions.DELETE_ITEM: {
      const duplicateResults = state.results.filter(
        (result) => result !== action.item
      );
      return {
        ...state,
        results: [...duplicateResults],
      };
    }
    default: {
      return state;
    }
  }
}
