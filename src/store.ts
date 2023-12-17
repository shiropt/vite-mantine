import { legacy_createStore as createStore } from 'redux';
import { appReducer } from './modules/reducers';

export const store = createStore(appReducer);
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type ThunkAction = (dispatch: Dispatch, getState: () => RootState) => any;
