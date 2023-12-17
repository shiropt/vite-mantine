import { Reducer } from 'redux';

import { Todo, TodoAction } from './type';
import { actionTypes } from './actionType';

// eslint-disable-next-line @typescript-eslint/default-param-last, consistent-return
export const reducer: Reducer<Todo[], TodoAction> = (state = [], action): Todo[] => {
  switch (action.type) {
    case actionTypes.SET_TODO:
      return action.payload;
    default:
      return state;
  }
};
