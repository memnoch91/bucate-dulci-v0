import React from "react";

import ReactDOM from 'react-dom';
//CSS
import './index.scss';
import './sharedCss/resets.scss'
import './sharedCss/mainContainer.scss'

//COMPONENTS
import App from './App';
import * as serviceWorker from './serviceWorker';

//REDUX
import { Provider } from "react-redux";
import { store } from "./redux/store";

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
