import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import allBarbers from './reducers/allBarbers';

const mainReducer = combineReducers({ allBarbers });
const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(mainReducer, middleware);

export default store;
export * from "./reducers";
