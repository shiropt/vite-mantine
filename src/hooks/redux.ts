import {
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from 'react-redux';

import type { RootState, Dispatch } from '../store';

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export const useDispatch = (): Dispatch => rawUseDispatch<Dispatch>();
