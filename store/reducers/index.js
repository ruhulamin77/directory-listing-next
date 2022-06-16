import { combineReducers } from 'redux';
import { categoriesReducer } from './categoryReducers';
import { locationsReducer } from './locationReducers';
import {
  newPostReducer,
  postDetailsReducer,
  postReducer,
  postsReducer,
} from './postReducers';
import { authReducer, userReducer } from './userReducers';

const reducers = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  post: postReducer,
  postDetails: postDetailsReducer,
  newPost: newPostReducer,
});

export default reducers;
