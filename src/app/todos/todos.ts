import { Component, inject } from '@angular/core';
import { TodoItem } from '../components/todo-item/todo-item';
import { TodosService } from '../services/todos/todos-service';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, ],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
    todoService = inject(TodosService);
}
