import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import { createSelector } from 'reselect';
import http from './http/main';
import oauth from './oauth/main';
import Logger from './logger/main';

const redux = {
  createStore,
  createSelector,
  combineReducers,
  combineEpics,
  ofType,
  createEpicMiddleware,
  applyMiddleware,
  compose
};

export { redux, http, oauth, Logger };

