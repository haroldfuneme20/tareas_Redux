import { createAction, props } from '@ngrx/store';


export const crear = createAction('[TODO] crear_todo', props<{texto: string}>());
export const toggleCheck = createAction('[TODO] toggleCheck_todo', props<{id: number}>());
export const editar = createAction('[TODO] editar_todo', props<{id: number, texto: string}>());
export const borrar = createAction('[TODO] borrar_todo', props<{id: number}>());
export const toggleAll = createAction('[TODO] borrar_todo', props<{completado: boolean}>());
export const limpiarCompletados = createAction('[Filtro] borrar_todo');

