import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

const defaultStore = {
  starships: [],
  error: undefined,
  loading: false,
}

export default store = createStore(starShipReducef, defaultStore, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOL_EXTENSION__()));