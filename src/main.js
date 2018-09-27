import { createStore, combineReducers, applyMiddleware, compose, replaceReducer } from 'redux';
import http from './http/main';

const redux = {
  createStore,
  combineReducers,
  applyMiddleware,
  replaceReducer,
  compose
};

export { redux, http };
