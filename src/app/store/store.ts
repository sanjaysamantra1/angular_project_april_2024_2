import { provideStore } from '@ngrx/store';
import { rootReducer } from '../reducers/todo_reducer';

export const myStore = provideStore(rootReducer);
