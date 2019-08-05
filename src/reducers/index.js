import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './auth';
import searchReducer from './search';
import historyReducer from './requestHistoryList';
import historyDetailsReducer from './requestHistoryDetails';
import profileReducer from './profile';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    user: userReducer,
    auth: authReducer,
    form: formReducer,
    search: searchReducer,
    history: historyReducer,
    historyDetails: historyDetailsReducer,
    profile: profileReducer
});
