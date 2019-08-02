import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
} from './types';

export const searchRequest = () => ({
    type: SEARCH_REQUEST
});

export const searchSuccess = (data) => ({
    type: SEARCH_SUCCESS,
    payload: data
});

export const searchFailure = (err) => ({
    type: SEARCH_FAILURE,
    payload: err
});
