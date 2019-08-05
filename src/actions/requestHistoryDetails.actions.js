import {
    HISTORY_DETAILS_REQUEST,
    HISTORY_DETAILS_SUCCESS,
    HISTORY_DETAILS_FAILURE,
} from './types';

export const historyDetailsRequest = () => ({
    type: HISTORY_DETAILS_REQUEST
});

export const historyDetailsSuccess = (data) => ({
    type: HISTORY_DETAILS_SUCCESS,
    payload: data
});

export const historyDetailsFailure = (err) => ({
    type: HISTORY_DETAILS_FAILURE,
    payload: err
});
