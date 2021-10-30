import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './componentes/header/header.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiaComponent} from './componentes/detalle-noticia/detalle-noticia.component';
import {FormularioComponent} from './componentes/formulario/formulario.component'
import {FooterComponent} from './componentes/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path: "inicio", component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path: "formulario", component:FormularioComponent},
  {path: "header", component:HeaderComponent},
  {path: "footer", component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

