import { combineReducers } from 'redux';
import cpu from './cpu/reducer';
import ui from './ui/reducer';

const rootReducer = combineReducers({ cpu, ui });

export default rootReducer;
