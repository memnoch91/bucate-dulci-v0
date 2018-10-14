import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers"

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fireBaseConfig from "../../config/fireBaseConfig"


const preloadedState = {};
const thunk = thunkMiddleware.withExtraArgument({getFirebase, getFirestore})

export const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk, logger),reactReduxFirebase(fireBaseConfig),reduxFirestore(fireBaseConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()

))
/**@types/react-dom @types/react-redux @types/redux-logger */
