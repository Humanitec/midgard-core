import { createStore } from 'redux';

class Core {
  configureStore = () => {
    this.store = createStore();
    return this.store;
  }

  getState = () => {
    return this.store && this.store.state;
  }
}

const core = new Core();

export default core;
