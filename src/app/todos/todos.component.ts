import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { TodoFormModel, TodoModel } from './shared/models/todo-form.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup<TodoFormModel>;
  todoList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private toastr: ToastrService, private fb: FormBuilder) {}

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
}
