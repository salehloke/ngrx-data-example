import { createReducer, on } from '@ngrx/store';
import { TodoModel } from '../models/todo-form.model';
import { addTodo, removeTodo, retrievedTodoList } from './todo.action';

export const initialState: ReadonlyArray<TodoModel> = [];

export const todoReducer = createReducer(
  initialState,
  on(retrievedTodoList, (state, { todos }) => todos)

  // on(reset, (state) => 0)
);
