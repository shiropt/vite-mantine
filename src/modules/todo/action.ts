import { Dispatch } from '../../store';
import { Todo } from './type';
import { setTodoList } from './slice';

export const fetchTodoList = async (dispatch: Dispatch) => {
  const todoList = await request('GET', '/todos');
  dispatch(setTodoList(todoList));
};

export const updateTodo = async (dispatch: Dispatch, todo: Todo) => {
  await request('PUT', `/todos/${todo.id}`, todo);
  fetchTodoList(dispatch);
};
export const addTodo = async (dispatch: Dispatch, todo: Todo) => {
  await request('POST', '/todos', todo);
  fetchTodoList(dispatch);
};

export const deleteTodo = async (dispatch: Dispatch, todo: Todo) => {
  await request('DELETE', `/todos/${todo.id}`);
  fetchTodoList(dispatch);
};

export const actions = {
  fetchTodoList,
  deleteTodo,
  updateTodo,
  addTodo,
};

export const request = async (
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
  url: string,
  data?: FormData | { readonly [key: string]: any }
): Promise<any> => {
  const body = data instanceof FormData ? data : JSON.stringify(data);
  const response = await fetch(url, { method, body });
  if (!response.ok) {
    throw new Error('request fail', {
      cause: { status: response.status, message: response.statusText },
    });
  }
  const json = await response.json();
  return json;
};
