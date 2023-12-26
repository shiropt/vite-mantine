import { Todo } from './type';
import { api } from '../api';

export const {
  useGetTodListQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = api.injectEndpoints({
  endpoints: (build) => ({
    getTodList: build.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['todo'],
    }),
    addTodo: build.mutation<Todo, Omit<Todo, 'id'>>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['todo'],
    }),
    updateTodo: build.mutation<Todo, Todo>({
      query: (updatedTodo) => ({
        url: `/todos/${updatedTodo.id}`,
        method: 'PUT',
        body: updatedTodo,
      }),
      invalidatesTags: ['todo'],
    }),
    deleteTodo: build.mutation<Todo, Todo['id']>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});
