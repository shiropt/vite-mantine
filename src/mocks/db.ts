// src/mocks/db.js
import { factory, primaryKey } from '@mswjs/data';
// import { setupServer } from 'msw/node';

export const db = factory({
  todo: {
    id: primaryKey(String),
    title: String,
    description: String,
    isDone: Boolean,
  },
});

// db.todo.create({
//   id: '1',
//   title: 'タイトル',
//   description: '説明',
//   isDone: false,
// });
// db.todo.create({
//   id: '2',
//   title: 'タイトル2',
//   description: '説明2',
//   isDone: false,
// });

// const handlers = [...db.todo.toHandlers('rest')];
// const server = setupServer(...handlers);
// server.listen();
// db.todo.toHandlers('rest');
