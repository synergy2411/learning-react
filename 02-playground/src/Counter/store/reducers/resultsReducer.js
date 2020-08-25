import * as counterActions from "../actions/counterActions";

const initialState = {
  results: []
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case counterActions.STORE_RESULT: {
      return {
        ...state,
        // results: [...state.results.concat(state.counter)],
        results: [...state.results.concat(action.value)],
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
