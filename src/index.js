import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {weatherReducer} from "./weatherReducer";

const store = createStore(weatherReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
