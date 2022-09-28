import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { TodoFormModel } from './shared/models/todo-form.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup<TodoFormModel>;
  todoList$: BehaviorSubject<TodoFormModel>;

  constructor(private toastr: ToastrService) {}
  ngOnInit() {}

  onAddTodo() {
    const todo = this.todoForm.controls;
    this.todoList$.next(todo);
    this.toastr.success('added new todo')
  }
}
