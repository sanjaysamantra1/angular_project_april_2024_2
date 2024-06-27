import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { ElementsTableComponent } from './components/elements-table/elements-table.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialDemoComponent,
    ElementsTableComponent,
    TabContainerComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_april_2024_2';

  arr1 = [10, 20];
  arr2 = [10, 20];

  add(a: any, b: any) {
    return a + b;
  }
  sub(a: any, b: any) {
    return a - b;
  }
  isEven(n: number) {
    if (n % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
}
