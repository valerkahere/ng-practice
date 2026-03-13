import { Injectable, inject } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
    http = inject(HttpClient); // access to post patch get ...

    getTodosFromApi() { // returns OBSERVABLE object
        const url = `https://jsonplaceholder.typicode.com/todos`;
        return this.http.get<Array<Todo>>(url)
    }
}
