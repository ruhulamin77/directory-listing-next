import {
  ALL_LOCATIONS_REQUEST,
  ALL_LOCATIONS_SUCCESS,
  ALL_LOCATIONS_FAIL,
  NEW_LOCATION_REQUEST,
  NEW_LOCATION_SUCCESS,
  NEW_LOCATION_RESET,
  NEW_LOCATION_FAIL,
  UPDATE_LOCATION_REQUEST,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_RESET,
  UPDATE_LOCATION_FAIL,
  DELETE_LOCATION_REQUEST,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_FAIL,
} from '../constants/locationConstants';

export const locationsReducer = (
  state = {
    locations: [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ALL_LOCATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
        error: null,
      };
    case ALL_LOCATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEW_LOCATION_SUCCESS:
      return {
        ...state,
        newLocation: action.payload,
        loading: false,
        error: null,
      };
    case NEW_LOCATION_RESET:
      return {
        ...state,
        newLocation: {},
        loading: false,
        error: null,
      };
    case NEW_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_LOCATION_SUCCESS:
      return {
        ...state,
        isUpdated: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_LOCATION_RESET:
      return {
        ...state,
        updateLocation: {},
        loading: false,
        error: null,
      };
    case UPDATE_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        locations: state.locations.filter(
          (location) => location.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case DELETE_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
