import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducer';

const composeEnhancers =
    process.env.NODE_ENV === `development` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancer);

export default store;