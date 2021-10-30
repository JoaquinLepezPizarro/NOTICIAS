import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  formulario:FormGroup;

  activarMensaje:boolean = false;

  constructor(public Form:FormBuilder) {
    this.formulario=this.Form.group({ //primer cambio
      nombre: ["",[Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      telefono: ["",[Validators.required, Validators.maxLength(9), Validators.pattern("^[0-9]*$")]],
      email: ["",Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      opcion:["",Validators.required],
      mensaje: ["",Validators.required]
    })
  
   }

  ngOnInit(): void {
  }

  validacion () {
    this.activarMensaje = true;

  }
}