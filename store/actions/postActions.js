import axios from "axios";
import Cookies from "js-cookie";
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
} from "../constants/postConstants";

// Get all posts
export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: ALL_POSTS_REQUEST });
  let url = `http://localhost:5000/api/posts`;
  try {
    const { data } = await axios.get(url);
    dispatch({ type: ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_POSTS_FAIL, payload: error.response.data.message });
  }
};

// Create new post
export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: NEW_POST_REQUEST });

    const token = Cookies.get("token");
    // console.log(token, "token");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/posts",
      post,
      config
    );

    dispatch({ type: NEW_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_POST_FAIL,
      payload: error.error || error.message,
    });
  }
};

// Get post details
export const getPostDetails = (id) => async (dispatch) => {
  dispatch({ type: POST_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`http://localhost:5000/api/posts/${id}`);
    dispatch({ type: POST_DETAILS_SUCCESS, payload: data.post });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload: error.error || error.message,
    });
  }
};

// clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
