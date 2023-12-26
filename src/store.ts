import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './modules/reducers';
import { api } from './modules/api';

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type ThunkAction = (dispatch: Dispatch, getState: () => RootState) => any;
