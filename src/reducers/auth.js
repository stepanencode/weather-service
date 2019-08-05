import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CHECK_LOGIN_REQUEST,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE
} from "../actions/types";

const defaultState = {
    authenticated: false,
    checkloginRequestCompleted: false,
    currentUser: null,
    loginError: null
};

export default function auth(state = defaultState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                authenticated: false,
                currentUser: null,
            };
        case CHECK_LOGIN_REQUEST:
           return {
               ...state,
           };
        case CHECK_LOGIN_SUCCESS:
            return {
                ...state,
                checkloginRequestCompleted: true,
                authenticated: true
            };
        case CHECK_LOGIN_FAILURE:
            return {
                ...state,
                checkloginRequestCompleted: true,
                authenticated: false,
                currentUser: null
            };
        default:
            return state;
    }
}
