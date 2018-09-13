import { createStore, combineReducers, applyMiddleware } from 'redux';

class Core {
  configureStore = () => {
    this.store = createStore();
    return this.store;
  }

  combineReducers = (reducers) => {
    return combineReducers(reducers);
  }

  applyMiddleware = (middlerware) => {
    return applyMiddleware(middlerware);
  }

  getState = () => {
    return this.store && this.store.state;
  }

  getDispatch = () => {
    if (this.store) {
      return this.store.dispatch;
    }
  }
}

const core = new Core();

export default core;
