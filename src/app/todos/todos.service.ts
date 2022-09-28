import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoModel } from './shared/models/todo-form.model';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<TodoModel>> {
    return this.http
      .get<{ items: TodoModel[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
