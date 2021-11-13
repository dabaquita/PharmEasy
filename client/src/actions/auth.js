import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const register = (registerFormData, router) => async (dispatch) => {
  try {
    const { data } = await api.register(registerFormData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch {
    console.log(`Could not register due to ${error}`);
  }
};

export const login = (loginFormData, router) => async (dispatch) => {
  try {
    const { data } = await api.register(loginFormData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch {
    console.log(`Could not login due to ${error}`);
  }
}