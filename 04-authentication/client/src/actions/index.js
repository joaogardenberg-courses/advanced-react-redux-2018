import axios from 'axios';

import {
  AUTH_USER,
  AUTH_ERROR
} from './types';

export const signin = (values, callback) => async (dispatch) => {
  try {
    const { data: { token } } = await axios.post('http://localhost:3090/signin', values);

    dispatch({
      type: AUTH_USER,
      payload: token
    });

    localStorage.setItem('token', token);

    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials'
    });
  }
};

export const signup = (values, callback) => async (dispatch) => {
  try {
    const { data: { token } } = await axios.post('http://localhost:3090/signup', values);

    dispatch({
      type: AUTH_USER,
      payload: token
    });

    localStorage.setItem('token', token);

    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
};