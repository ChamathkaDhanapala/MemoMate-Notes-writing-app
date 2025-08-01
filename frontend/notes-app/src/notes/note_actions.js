import axios from "axios";
import { store } from "../Store"
import {
  CREATE_NOTES_ERROR,
  CREATE_NOTES_LOADING,
  CREATE_NOTES_SUCCESS,
  DELETE_NOTES_ERROR,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS
} from "./note_types";

import { BASE_URL } from "../constant/config";
import { LOGOUT } from "../users/user_types";

// Get Notes
export const getNotes = () => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: GET_NOTES_LOADING });

  try {
    const res = await axios(`${BASE_URL}/note`, {
      method: "get",
      headers: {
        Authorization: token,
      },
    });

    const { status, data } = res.data;

    if (status === 1) {
      dispatch({ type: GET_NOTES_SUCCESS, payload: data });
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: GET_NOTES_ERROR });
    }
  } catch (error) {
    console.error("Get Notes Error:", error);
    dispatch({ type: GET_NOTES_ERROR });
  }
};

// Create Notes
export const createNotes = (obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: CREATE_NOTES_LOADING });

  try {
    const res = await axios(`${BASE_URL}/note/create`, {
      method: "post",
      data: obj,
      headers: {
        Authorization: token,
      },
    });

    const { status } = res.data;

    if (status === 1) {
      dispatch({ type: CREATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: CREATE_NOTES_ERROR });
    }
  } catch (error) {
    console.error("Create Note Error:", error);
    dispatch({ type: CREATE_NOTES_ERROR });
  }
};

// Update Notes
export const updateNotes = (id, obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: UPDATE_NOTES_LOADING });

  try {
    const res = await axios(`${BASE_URL}/note/${id}`, {
      method: "patch",
      data: obj,
      headers: {
        Authorization: token,
      },
    });

    const { status } = res.data;

    if (status === 1) {
      dispatch({ type: UPDATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: UPDATE_NOTES_ERROR });
    }
  } catch (error) {
    console.error("Update Note Error:", error);
    dispatch({ type: UPDATE_NOTES_ERROR });
  }
};

// Delete Notes
export const deleteNotes = (id) => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: DELETE_NOTES_LOADING });

  try {
    const res = await axios(`${BASE_URL}/note/${id}`, {
      method: "delete",
      headers: {
        Authorization: token,
      },
    });

    const { status } = res.data;

    if (status === 1) {
      dispatch({ type: DELETE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: DELETE_NOTES_ERROR });
    }
  } catch (error) {
    console.error("Delete Note Error:", error);
    dispatch({ type: DELETE_NOTES_ERROR });
  }
};
