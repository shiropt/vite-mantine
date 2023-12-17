import { combineReducers } from 'redux';
import { reducer as account } from '../account/reducer';

export const appReducer = combineReducers({ account });
