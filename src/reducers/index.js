import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './auth';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    user: userReducer,
    auth: authReducer,
    form: formReducer
});