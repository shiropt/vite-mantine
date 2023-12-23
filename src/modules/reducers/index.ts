import { combineReducers } from 'redux';
import { reducer as account } from '../account/reducer';
import { reducer as todo } from '../todo/slice';

export const appReducer = combineReducers({ account, todo });
