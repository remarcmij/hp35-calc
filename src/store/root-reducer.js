import { combineReducers } from 'redux';
import logic from './logic/reducer';
import ui from './ui/reducer';

const rootReducer = combineReducers({ logic, ui });

export default rootReducer;
