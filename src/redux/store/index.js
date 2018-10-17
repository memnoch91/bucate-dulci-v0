import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";



const preloadedState = {};

export const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunkMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()

));

/**@types/react-dom @types/react-redux @types/redux-logger */
