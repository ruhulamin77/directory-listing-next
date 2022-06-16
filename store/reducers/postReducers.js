import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAIL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_RESET,
  NEW_POST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_REQUEST,    
  POST_DELETE_SUCCESS,
  POST_DELETE_RESET,
  POST_DELETE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_RESET,
  POST_UPDATE_FAIL,
  CLEAR_ERRORS,
} from '../constants/postConstants';

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        posts: [],
      };
    case ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload.posts,
        postsCount: action.payload.count,
      };
    case ALL_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const postDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        post: {},
      };
    case POST_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload,
      };
    case POST_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        post: {},
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case NEW_POST_REQUEST:
      return {
        ...state,
        loading: true,
        post: {},
      };
    case NEW_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        post: action.payload.post,
      };
    case NEW_POST_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        post: {},
      };
    case NEW_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
    case POST_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isDeleted: action.payload,
      };
    case POST_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isUpdated: action.payload,
      };
    case POST_DELETE_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        isDeleted: false,
      };
    case POST_UPDATE_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        isUpdated: false,
      };
    case POST_DELETE_FAIL:
    case POST_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
