import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';

const rootReducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
