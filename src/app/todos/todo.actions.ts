import { createAction, props } from '@ngrx/store';


export const crear = createAction('[TODO] crear_todo', props<{texto: string}>());
export const toggleCheck = createAction('[TODO] toggleCheck_todo', props<{id: number}>());
export const editar = createAction('[TODO] editar_todo', props<{id: number, texto: string}>());
