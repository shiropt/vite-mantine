import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './modules/reducers';

export const store = configureStore({
  reducer: appReducer,
  middleware: (defaultMiddleware) => defaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type ThunkAction = (dispatch: Dispatch, getState: () => RootState) => any;
