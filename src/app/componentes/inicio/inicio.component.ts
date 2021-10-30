import {Component, OnInit} from '@angular/core';
import {ListaNoticias,Noticias} from '../../interfaces/noticias';
import {ListaCategorias} from'../../interfaces/categorias';

@Component({
  selector: 'app-inicio',
  templateUrl:'./inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  ListaNoticias = ListaNoticias;
  Categoria:any;

  mostrarNoticiasDestacadas(){
    return this.ListaNoticias.filter((ListaNoticias) => ListaNoticias.destacado==true);
  }

  mostrarNoticiasNormales(){
    return this.ListaNoticias.filter((ListaNoticias) => ListaNoticias.destacado==false);
  }


  constructor() {}

   ngOnInit(): void {
  }

  Noticia:any;
  Color:any;

  colorBoton(id:number):String{
    this.Noticia=this.ListaNoticias.find(objeto=>objeto.id==id);
    this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.id);
    this.Color=this.Categoria.color;
    console.log(this.Color);

    return this.Color;
  }

}
