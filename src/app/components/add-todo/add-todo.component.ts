import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from '../../actions/todo_actions';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  constructor(private store: Store) { }

  addMyTodo(text: any) {
    const actionObj = addTodo(text);
    this.store.dispatch(actionObj)
  }
}
