import { combineReducers } from 'redux';
import themes from './themes';

export const allReducers = {
    themes,
};

export default combineReducers(allReducers);
