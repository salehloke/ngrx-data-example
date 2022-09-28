import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.action';

export const initialState: ReadonlyArray<string> = [];

export const todoCollectionReducer = createReducer(
  initialState,
  on(removeTodo, (state, { todoId }) => state.filter((id) => id !== todoId)),
  on(addTodo, (state, { todoId }) => {
    if (state.indexOf(todoId) > -1) return state;

    return [...state, todoId];
  })
);
