import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import reducer from './reducer';
import todoSagas from './sagas';

const composeEnhancers =
    process.env.NODE_ENV === `development` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancer);
// then run the saga
sagaMiddleware.run(todoSagas);

export default store;