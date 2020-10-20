import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'pipeFiltro'
})
export class PipeFiltroPipe implements PipeTransform {

  transform(todos: Todo [], filtro: filtrosValidos): Todo[] {

    switch (filtro) {
     case 'completados':
       return todos.filter( todo => todo.completado );
     case 'pendientes':
       return todos.filter( todo => !todo.completado );

     default:
       return todos;
   }
  }

}
