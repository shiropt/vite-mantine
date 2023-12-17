import { actionTypes } from './actionType';

export type Todo = {
  id?: string;
  title: string;
  isDone: boolean;
  description: string;
};

export type TodoAction = {
  readonly type: keyof typeof actionTypes;
  readonly payload: Todo[];
};
