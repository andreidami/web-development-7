import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
const initialState = {
  value: 0,
  isLoading: false,
  character: {},
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    case "START_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STAR_WARS_CAHARACTER_SUCCESS":
      return {
        ...state,
        character: action.character,
        isLoading: false,
      };
    case "GET_STAR_WARS_CHARACTER_ERROR":
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    default:
      return state;
  }
};

// const logger = (store) => (next) => (action) => {
//     console.log('dispatching:', action)
//     const result = next(action);
//     console.log('next state', store.getState());
//     return result;

// };

const logger = createLogger();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);
export default store;
