import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createSelector } from 'reselect';
import http from './http/main';
import oauth from './oauth/main';

const redux = {
  createStore,
  createSelector,
  combineReducers,
  applyMiddleware,
  compose
};

export { redux, http, oauth };
