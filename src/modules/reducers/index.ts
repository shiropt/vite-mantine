import { combineReducers } from 'redux';
import { reducer as account } from '../account/reducer';
import { reducer as todo } from '../todo/slice';
import { api } from '../api';

export const appReducer = combineReducers({ [api.reducerPath]: api.reducer, account, todo });
