import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk'

import StarshipReducer from './StarshipReducer'

const defaultStore = {
    starships: [],
    error: null,
    loading: false,
}

export const store = createStore(StarshipReducer, defaultStore, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))