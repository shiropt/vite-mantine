import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tagTypes = ['todo'] as const;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
  tagTypes,
});
