import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' }
  ];
  addItem(title: string) {
    this.todoList.push({ title });
  }
}
