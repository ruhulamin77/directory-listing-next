import {
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
  ALL_CATEGORIES_FAIL,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_SUCCESS,
  NEW_CATEGORY_RESET,
  NEW_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_RESET,
  UPDATE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
} from '../constants/categoryConstants';

export const categoriesReducer = (
  state = {
    categories: [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data,
        loading: false,
        error: null,
      };
    case ALL_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEW_CATEGORY_SUCCESS:
      return {
        ...state,
        newCategory: action.payload,
        loading: false,
        error: null,
      };
    case NEW_CATEGORY_RESET:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case NEW_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updateCategory: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_CATEGORY_RESET:
      return {
        ...state,
        updateCategory: {},
        loading: false,
        error: null,
      };
    case UPDATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case DELETE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
