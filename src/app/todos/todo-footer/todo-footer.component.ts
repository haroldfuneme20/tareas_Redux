import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { borrar, limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos [] = [ 'todos', 'completados', 'pendientes'];
  pendientes = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filtro => {
    //   this.filtroActual = filtro;
    // });
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => {
        return !todo.completado;
      }).length;
    });
  }

  cambiarFiltro( filtro: actions.filtrosValidos ) {
    this.store.dispatch( actions.setFilter({filtro: filtro}));
  }

  limpiarCom() {
    this.store.dispatch( limpiarCompletados());

  }

}
