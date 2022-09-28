import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './todos/todos.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/shared/state/todo.reducer';
import { todoCollectionReducer } from './todos/shared/state/todo-collection.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000, // 2 seconds
      progressBar: true,
    }),
    StoreModule.forRoot({
      todos: todoReducer,
      collection: todoCollectionReducer,
    }),
    StoreModule.forRoot({
      todo: todoReducer,
    }),
  ],
  declarations: [AppComponent, HelloComponent, TodosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
