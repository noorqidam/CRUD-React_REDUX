import axios from "axios";
import { API_URL } from "../utils/constants";

export const GET_USERS_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(API_URL + "users")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get(API_URL + "users/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
};

export const deleteUserDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      }
    })
  }
};
