import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './type';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<Todo[]>) {
      state = action.payload;
    },
  },
});

export const { reducer } = todoSlice;
export const { setTodoList } = todoSlice.actions;
