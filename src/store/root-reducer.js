import { combineReducers } from 'redux';
import system from './system/reducer';
import ui from './ui/reducer';

const rootReducer = combineReducers({ system, ui });

export default rootReducer;
