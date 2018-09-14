import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import http from './http/main';

const Core = {
  redux: {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
  },
  http
};

export default Core;
