import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoItem } from '../components/todo-item/todo-item';
import { TodosService } from '../services/todos/todos-service';
import { Todo } from '../model/todo.type';

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
        console.log(this.todoService.todoItems);
        this.todoItems.set(this.todoService.todoItems);
    }

}
