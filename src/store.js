import { createStore, compose, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';


import rootReducer from './reducers/index';

const defaultState = {
    cart: []
}

const enhancers = compose(
    window.devToolsExtension ?  window.devToolsExtension() : (f) => f
);

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    defaultState,
    enhancers,
    applyMiddleware(middleware)
);

export default store;