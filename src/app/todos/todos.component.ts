import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { TodoFormModel, TodoModel } from './shared/models/todo-form.model';
import { addTodo, retrievedTodoList } from './shared/state/todo.action';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup<TodoFormModel>;
  todoList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private toastr: ToastrService, private store: Store) {}

  ngOnInit() {
    this.todoForm = new FormGroup<TodoFormModel>({
      description: new FormControl(''),
    });
    this.todoList$.subscribe();
  }

  onAddTodo() {
    // get the todo item
    const todo = this.todoForm.value.description;
    let todoList = this.todoList$.value;
    todoList.push(todo);
    // pass to the observables
    this.todoList$.next(todoList);
    this.toastr.success(`added new task: ${todo}`, 'Success');

    // reset form
    this.todoForm.reset();
  }

  addTodoAction(todoId: string) {
    // TODO: Dispatch an increment action
    this.store.dispatch(addTodo({ todoId }));
  }

  removeTodoAction() {
    // TODO: Dispatch a decrement action
  }

  retrievedTodoAction() {
    // TODO: Dispatch a reset action
    // this.store.dispatch(retrievedTodoList({ todos }))
  }
}
