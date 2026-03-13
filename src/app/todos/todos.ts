import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoItem } from '../components/todo-item/todo-item';
import { TodosService } from '../services/todos/todos-service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, ],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
    todoService = inject(TodosService);

    todoItems = signal<Array<Todo>>([]);

    ngOnInit(): void {
        this.todoService.getTodosFromApi()
        .pipe(
            catchError((err) => {
                console.log(err);
                throw err;
            })
        ).subscribe((todos) => {
            this.todoItems.set(todos);
        });
    }

}
