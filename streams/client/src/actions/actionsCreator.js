import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

//CREATE STREAM
export const createStream = (formValue) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    //passed userId from auth with created stream
    const response = await streams.post('/streams', { ...formValue, userId });

    dispatch({
      type: CREATE_STREAM,
      payload: response.data,
    });
  };
};

//GET LIST STREAMS
export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');

    dispatch({
      type: FETCH_STREAMS,
      payload: response.data,
    });
  };
};

//GET STREAM
export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
      type: FETCH_STREAM,
      payload: response.data,
    });
  };
};

//EDIT STEAM
export const editStream = (id, formValue) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValue);

    dispatch({
      type: EDIT_STREAM,
      payload: response.data,
    });
  };
};

//DELETE STREAM
export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({
      type: DELETE_STREAM,
      payload: id,
    });
  };
};
