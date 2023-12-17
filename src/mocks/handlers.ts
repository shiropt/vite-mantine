import { db } from './db';

db.todo.create({ id: '1', title: 'todo1', description: 'default data', isDone: false });

export const handlers = [...db.todo.toHandlers('rest')];
