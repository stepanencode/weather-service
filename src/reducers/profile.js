import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
    SUBMIT_PROFILE_REQUEST,
    SUBMIT_PROFILE_SUCCESS,
    SUBMIT_PROFILE_FAILURE,
    TOGGLE_PROFILE_EDIT
} from "../actions/types";

const defaultState = {
    isEdited: false,
    user: {
        username: null,
        email: null,
        password: null
    }
};

export default function search(state = defaultState, action) {
    switch(action.type) {
        case TOGGLE_PROFILE_EDIT:
            return {
                ...state,
                isEdited: !state.isEdited
            };
        case GET_PROFILE_REQUEST:
            return {
                ...state,
            };
        case GET_PROFILE_SUCCESS:
            return {
                isEdited: false,
                user: action.payload
            };
        case GET_PROFILE_FAILURE:
            return {
                ...state,
            };
        case SUBMIT_PROFILE_REQUEST:
            return {
                ...state,
            };
        case SUBMIT_PROFILE_SUCCESS:
            return {
                isEdited: false,
                user: action.payload
            };
        case SUBMIT_PROFILE_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
}
