import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo 1'),
    new Todo('Salvar al mundo 2'),
    new Todo('Salvar al mundo 3'),
    new Todo('Salvar al mundo 4'),
];

const _todoReducer = createReducer(
    initialState,
    // action( 'nombre', {parametro} => [ destructuracion de [ array], nuevo todo creado con el parametro ] )
    on(actions.crear, (state, { texto }) =>  [...state, new Todo(texto)]),
    on(actions.toggleCheck, (state, { id }) =>  {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    // extrae todas las propiedades
                    ...todo,
                    completado: !todo.completado
                }
            }else {
                return todo;
            }
        } );
    }),
    on(actions.editar, (state, { id, texto }) =>  {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    // extrae todas las propiedades
                    ...todo,
                    texto: texto
                }
            }else {
                return todo;
            }
        } );
    }),
    on(actions.borrar, (state, { id }) =>
        state.filter( todo => {
            return todo.id !== id;
    })),
    on(actions.toggleAll, (state, { completado }) =>  {
        return state.map( todo => {
            return {
                    // extrae todas las propiedades
                    ...todo,
                    completado: completado
            }
        } );
    }),
    on(actions.limpiarCompletados, (state) =>  {
        return state.filter(todo => {
            return todo.completado !== true;
    });
    }),
);

export function todoReducer(state,  action) {
    return _todoReducer(state, action);
}
