import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';



const initialState: actions.filtrosValidos = 'todos';

const _filtroReducer = createReducer(
    initialState,
    on(actions.setFilter, (state, {filtro}) => {
        return filtro;
    } ),
);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}