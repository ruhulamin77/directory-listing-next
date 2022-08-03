import axios from 'axios';
import Cookies from 'js-cookie';
import { GiCrystalGrowth } from 'react-icons/gi';
import {
  ALL_SETTINGS_REQUEST,
  ALL_SETTINGS_SUCCESS,
  ALL_SETTINGS_FAIL,
  NEW_SETTING_REQUEST,
  NEW_SETTING_SUCCESS,
  NEW_SETTING_RESET,
  NEW_SETTING_FAIL,
  UPDATE_SETTING_REQUEST,
  UPDATE_SETTING_SUCCESS,
  UPDATE_SETTING_RESET,
  UPDATE_SETTING_FAIL,
  DELETE_SETTING_REQUEST,
  DELETE_SETTING_SUCCESS,
  DELETE_SETTING_FAIL,
} from '../constants/settingConstants.js';

// token for settings
const token = Cookies.get('token');
console.log(token, 'token');

const config = {
  headers: {
    Authorization: token,
  },
};

// Get all settings
export const getAllSettings = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_SETTINGS_REQUEST,
    });
    const response = await axios.get('http://localhost:5000/api/setting');
    dispatch({
      type: ALL_SETTINGS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SETTINGS_FAIL,
      payload: error.message,
    });
  }
};

// Create new setting
export const createNewSettings = (setting) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_SETTING_REQUEST,
    });
    const response = await axios.post(
      'http://localhost:5000/api/setting',
      setting,
      config
    );
    dispatch({
      type: NEW_SETTING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SETTING_FAIL,
      payload: error.message,
    });
  }
};

// Update setting
export const updateSetting = (id, settingData) => async (dispatch) => {
  console.log('settingData action', settingData, id);
  try {
    dispatch({
      type: UPDATE_SETTING_REQUEST,
    });
    const response = await axios.put(
      `http://localhost:5000/api/setting/${id}`,
      settingData,
      config
    );
    dispatch({
      type: UPDATE_SETTING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SETTING_FAIL,
      payload: error.message,
    });
  }
};

// Delete setting
export const deleteSetting = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CATEGORY_REQUEST,
    });
    await axios.delete(`http://localhost:5000/api/setting/${id}`, config);
    dispatch({
      type: DELETE_SETTING_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SETTING_FAIL,
      payload: error.message,
    });
  }
};
