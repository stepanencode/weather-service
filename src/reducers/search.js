import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from "../actions/types";

const defaultState = {
    city: null,
    items: []
};

export default function search(state = defaultState, action) {
    switch(action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                city: action.payload.city,
                items: action.payload.items
            };
        case SEARCH_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
}