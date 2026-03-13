import { Component, inject, OnInit } from '@angular/core';
import { TodoItem } from '../components/todo-item/todo-item';
import { TodosService } from '../services/todos/todos-service';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, ],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
    todoService = inject(TodosService);

    ngOnInit(): void {
        console.log(this.todoService.todoItems);
    }

}
