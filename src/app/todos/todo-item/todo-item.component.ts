import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';
import { borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputfisico') txtInputFisico: ElementRef;

  checkCompl: FormControl;
  txtinput: FormControl;
  editando = false;

  constructor(
    private store: Store<AppState>,

  ) { }

  ngOnInit(): void {
    this.checkCompl = new FormControl( this.todo.completado);
    this.txtinput = new FormControl( this.todo.texto, Validators.required );

    this.checkCompl.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggleCheck({id: this.todo.id}));
    });
  }

  edit( ) {
    this.editando = true;

    this.txtinput.setValue( this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdit() {
    this.editando = false;

    if (this.txtinput.invalid) { return; }
    if (this.txtinput.value === this.todo.texto) { return; }
    this.store.dispatch( actions.editar(
    {
      id: this.todo.id,
      texto: this.txtinput.value
    }
    ));
  }

  borrar() {
    this.store.dispatch( actions.borrar({id: this.todo.id}));
  }

}
