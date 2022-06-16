import axios from 'axios';
import { GiCrystalGrowth } from 'react-icons/gi';
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

// Get all categories
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_CATEGORIES_REQUEST,
    });
    const response = await axios.get('http://localhost:5000/api/categories');
    dispatch({
      type: ALL_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORIES_FAIL,
      payload: error.message,
    });
  }
};

// Create new category
export const createNewCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_CATEGORY_REQUEST,
    });
    const response = await axios.post('/api/categories', category);
    dispatch({
      type: NEW_CATEGORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CATEGORY_FAIL,
      payload: error.message,
    });
  }
};

// Update category
export const updateCategory = (id, categoryData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CATEGORY_REQUEST,
    });
    const response = await axios.put(`/api/categories/${id}`, categoryData);
    dispatch({
      type: UPDATE_CATEGORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CATEGORY_FAIL,
      payload: error.message,
    });
  }
};

// Delete category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CATEGORY_REQUEST,
    });
    await axios.delete(`/api/categories/${id}`);
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload: error.message,
    });
  }
};
