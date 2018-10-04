import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from '../reducers';


const enhancer = applyMiddleware(promise, logger);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}