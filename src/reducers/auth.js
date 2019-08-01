import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CHECK_LOGIN_REQUEST,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE
} from '../actions/types';

const defaultState = {
    authenticated: false,
    // isLoadingChecklogin: false,
    checkloginRequestCompleted: false,
    currentUser: null,
    loginError: null
};

export default function auth(state = defaultState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                // isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true
                // currentUser: action.payload.user
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                authenticated: false,
                currentUser: null,
                // loginError: action.payload
            }
        case CHECK_LOGIN_REQUEST:
           return {
               ...state,
           }
        case CHECK_LOGIN_SUCCESS:
            return {
                ...state,
                checkloginRequestCompleted: true,
                authenticated: true
                // currentUser: action.payload.user
            }
        case CHECK_LOGIN_FAILURE:
            return {
                ...state,
                checkloginRequestCompleted: true,
                authenticated: false,
                currentUser: null
            }

        default:
            return state;
    }

}