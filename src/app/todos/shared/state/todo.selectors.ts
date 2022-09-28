import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoModel } from '../models/todo-form.model';

export const selectTodos =
  createFeatureSelector<ReadonlyArray<TodoModel>>('todos');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectTodos,
  selectCollectionState,
  (todos, collection) => {
    return collection.map((id) => todos.find((todo) => todo.todoId === id));
  }
);
