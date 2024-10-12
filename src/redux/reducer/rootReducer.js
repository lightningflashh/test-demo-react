import { combineReducers } from 'redux';
import counterReducer from './userReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;