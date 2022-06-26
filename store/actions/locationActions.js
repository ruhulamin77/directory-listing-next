import axios from "axios";
import Cookies from "js-cookie";
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
} from "../constants/locationConstants";

// token for locations
const token = Cookies.get("token");
console.log(token, "token");

const config = {
  headers: {
    Authorization: token,
  },
};

// Get all locations
export const getLocations = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_LOCATIONS_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/location");
    dispatch({ type: ALL_LOCATIONS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: ALL_LOCATIONS_FAIL, payload: error.message });
  }
};

// Create new location
export const createNewLocation = (location) => async (dispatch) => {
  try {
    dispatch({ type: NEW_LOCATION_REQUEST });
    console.log(location);

    const { data } = await axios.post(
      "http://localhost:5000/api/location",
      location,
      config
    );
    dispatch({ type: NEW_LOCATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NEW_LOCATION_FAIL, payload: error.message });
  }
};

// Update location
export const updateLocationData = (id, locationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LOCATION_REQUEST });
    const { data } = await axios.put(
      `http://localhost:5000/api/location/${id}`,
      locationData,
      config
    );
    dispatch({ type: UPDATE_LOCATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_LOCATION_FAIL, payload: error.message });
  }
};

// Delete location
export const deleteLocation = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LOCATION_REQUEST });
    await axios.delete(`http://localhost:5000/api/location/${id}`, config);
    dispatch({ type: DELETE_LOCATION_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_LOCATION_FAIL, payload: error.message });
  }
};
