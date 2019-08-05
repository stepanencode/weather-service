import {
    HISTORY_REQUEST,
    HISTORY_SUCCESS,
    HISTORY_FAILURE
} from "../actions/types";

const defaultState = {
    items: [],
};

export default function requestHistoryList(state = defaultState, action) {
    switch(action.type) {
        case HISTORY_REQUEST:
            return {
                ...state,
            };
        case HISTORY_SUCCESS:
            return action.payload;
        case HISTORY_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }

}
