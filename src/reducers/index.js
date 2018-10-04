import { combineReducers } from 'redux';
import tabPageReducer from './tabPage';


export default combineReducers({
    tabPage: tabPageReducer,
});
