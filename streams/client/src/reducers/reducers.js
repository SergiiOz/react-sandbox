import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import { reducer as formReducer } from 'final-form';

const rootReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

//connect redux devtools
//https://extension.remotedev.io/#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

//it show state in console
// window.store = store;
//example write in console: console.log(store.getState())

export default store;
