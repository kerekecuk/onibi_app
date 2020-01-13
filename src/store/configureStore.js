import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
//eslint-disable-next-line no-unused-vars
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, freeze /* , logger */)
);
//export const store = createStore(rootReducer);
