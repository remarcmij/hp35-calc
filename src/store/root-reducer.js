import { combineReducers } from 'redux';
import cpu from '../cpu/redux/reducer';
import ui from '../ui/redux/reducer';

const rootReducer = combineReducers({ cpu, ui });

export default rootReducer;
