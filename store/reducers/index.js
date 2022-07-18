import { combineReducers } from 'redux';
import { categoriesReducer } from './categoryReducers';
import { locationsReducer } from './locationReducers';
import {
  newPostReducer,
  postDetailsReducer,
  postReducer,
  postsReducer,
} from './postReducers';
import { settingsReducer } from './settingReducers';
import { authReducer, loadedUserReducer, userReducer } from './userReducers';

const reducers = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  posts: postsReducer,
  post: postReducer,
  postDetails: postDetailsReducer,
  newPost: newPostReducer,
  settings: settingsReducer,
});

export default reducers;
