import {
    HISTORY_DETAILS_REQUEST,
    HISTORY_DETAILS_SUCCESS,
    HISTORY_DETAILS_FAILURE
} from "../actions/types";

const defaultState = {
    items: [],
};

export default function requestHistoryDetails(state = defaultState, action) {
    switch(action.type) {
        case HISTORY_DETAILS_REQUEST:
            return {
                ...state,
            };
        case HISTORY_DETAILS_SUCCESS:
            console.log(222, action.payload);
            return action.payload;
        case HISTORY_DETAILS_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
}
