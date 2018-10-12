import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import http from './http/main';
import oauth from './oauth/main';

const redux = {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
};

export { redux, http, oauth };
