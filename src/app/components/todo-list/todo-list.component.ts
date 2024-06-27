import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo } from '../../actions/todo_actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  allToDos: any;

  constructor(private store: Store) {
  }
  ngOnInit() {
    // subsriber of the store
    this.store.subscribe((state: any) => {
      console.log(state);
      this.allToDos = state.todosReducer;
    });
  }

  deleteMyTodo(id: any) {
    // Dispatch an action
    const actionObj = deleteTodo(id);
    this.store.dispatch(actionObj);
  }
  toggleMyTodo(id: any) {
    this.store.dispatch({ type: 'TOGGLE_TODO', payload: { id: id } });
  }
}
