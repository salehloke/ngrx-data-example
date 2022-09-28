import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../models/todo-form.model';

// export const addTodo = createAction('[Todo List] Add Todo');
// export const removeTodo = createAction('[Todo List] Remove Todo');
// export const reset = createAction('[Todo List] Reset Todo');

export const addTodo = createAction(
  '[Todo List] Add Todo',
  props<{ todoId: string }>()
);

export const removeTodo = createAction(
  '[Todo Collection] Remove Todo',
  props<{ todoId: string }>()
);
export const retrievedTodoList = createAction(
  '[Todo List/API] Retrieve Todos Success',
  props<{ todos: ReadonlyArray<TodoModel> }>()
);
