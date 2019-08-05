import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CHECK_LOGIN_REQUEST,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE
} from './types';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    payload: err
});

export const registerRequest = () => ({
    type: REGISTER_REQUEST
});

export const registerSuccess = (data) => ({
    type: REGISTER_SUCCESS,
    payload: data
});

export const registerFailure = (err) => ({
    type: REGISTER_FAILURE,
    payload: err
});

export const checkLoginRequest = () => ({
    type: CHECK_LOGIN_REQUEST
});

export const checkLoginSuccess = (data) => ({
    type: CHECK_LOGIN_SUCCESS,
    payload: data
});

export const checkLoginFailure = (err) => ({
    type: CHECK_LOGIN_FAILURE,
    payload: err
});
