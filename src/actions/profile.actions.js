import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    SUBMIT_PROFILE_REQUEST,
    SUBMIT_PROFILE_SUCCESS,
    SUBMIT_PROFILE_FAILURE,
    TOGGLE_PROFILE_EDIT
} from "./types";

export const toggleProfileEdit = () => ({
    type: TOGGLE_PROFILE_EDIT
});

export const getProfileRequest = () => ({
    type: GET_PROFILE_REQUEST
});

export const getProfileSuccess = (data) => ({
    type: GET_PROFILE_SUCCESS,
    payload: data
});

export const getProfileFailure = (err) => ({
    type: GET_PROFILE_FAILURE,
    payload: err
});

export const submitProfileRequest = () => ({
    type: SUBMIT_PROFILE_REQUEST
});

export const submitProfileSuccess = (data) => ({
    type: SUBMIT_PROFILE_SUCCESS,
    payload: data
});

export const submitProfileFailure = (err) => ({
    type: SUBMIT_PROFILE_FAILURE,
    payload: err
});
