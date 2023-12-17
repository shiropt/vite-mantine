import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './modules/reducers';

export const store = createStore(appReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type ThunkAction = (dispatch: Dispatch, getState: () => RootState) => any;
