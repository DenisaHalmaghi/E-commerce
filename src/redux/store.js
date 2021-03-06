import { applyMiddleware, compose, createStore } from 'redux';

import logger from "redux-logger";
import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [ logger ];

const store = createStore( rootReducer, composeEnhancers(
  applyMiddleware( ...middleware )
) );


export default store;
