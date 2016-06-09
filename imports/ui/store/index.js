import { createStore, applyMiddleware } from 'redux';
import client from '../apollo';
import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const apolloMiddleware = client.middleware();
const logger = createLogger();

const middlewares = [
  thunkMiddleware,
  apolloMiddleware,
  logger,
];

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...middlewares
  )
);

export default store;
