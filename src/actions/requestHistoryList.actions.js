import {
    HISTORY_REQUEST,
    HISTORY_SUCCESS,
    HISTORY_FAILURE,
} from "./types";

export const historyRequest = () => ({
    type: HISTORY_REQUEST
});

export const historySuccess = (data) => ({
    type: HISTORY_SUCCESS,
    payload: data
});

export const historyFailure = (err) => ({
    type: HISTORY_FAILURE,
    payload: err
});
