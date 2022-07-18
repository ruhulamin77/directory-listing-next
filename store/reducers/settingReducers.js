import {
  ALL_SETTINGS_FAIL,
  ALL_SETTINGS_REQUEST,
  ALL_SETTINGS_SUCCESS,
  DELETE_SETTING_FAIL,
  DELETE_SETTING_REQUEST,
  DELETE_SETTING_SUCCESS,
  NEW_SETTING_FAIL,
  NEW_SETTING_REQUEST,
  NEW_SETTING_RESET,
  NEW_SETTING_SUCCESS,
  UPDATE_SETTING_FAIL,
  UPDATE_SETTING_REQUEST,
  UPDATE_SETTING_RESET,
  UPDATE_SETTING_SUCCESS,
} from '../constants/settingConstants.js';

export const settingsReducer = (
  state = {
    settings: [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ALL_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ALL_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload.data,
        loading: false,
        error: null,
      };
    case ALL_SETTINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SETTING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEW_SETTING_SUCCESS:
      return {
        ...state,
        newSetting: action.payload,
        loading: false,
        error: null,
      };
    case NEW_SETTING_RESET:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case NEW_SETTING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_SETTING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_SETTING_SUCCESS:
      return {
        ...state,
        updateSetting: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_SETTING_RESET:
      return {
        ...state,
        updateSetting: {},
        loading: false,
        error: null,
      };
    case UPDATE_SETTING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SETTING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_SETTING_SUCCESS:
      return {
        ...state,
        settings: state.settings.filter(
          (category) => category.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case DELETE_SETTING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
