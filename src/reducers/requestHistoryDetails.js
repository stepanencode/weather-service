import {
    HISTORY_DETAILS_REQUEST,
    HISTORY_DETAILS_SUCCESS,
    HISTORY_DETAILS_FAILURE
} from "../actions/types";

const defaultState = {
    items: [],
    city: "",
    createdAt: ""
};

export default function requestHistoryDetails(state = defaultState, action) {
    switch(action.type) {
        case HISTORY_DETAILS_REQUEST:
            return {
                ...state,
            };
        case HISTORY_DETAILS_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                city: action.payload.city,
                createdAt: action.payload.createdAt
            };
        case HISTORY_DETAILS_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
}
