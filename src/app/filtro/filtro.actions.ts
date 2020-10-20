

import { createAction, props } from '@ngrx/store';
import { type } from 'os';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
    '[Filtro] set_Filtro',
    props<{filtro: filtrosValidos}>()
);


