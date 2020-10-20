import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';

//configura todos los reducer de la app
export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}


export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer,
}