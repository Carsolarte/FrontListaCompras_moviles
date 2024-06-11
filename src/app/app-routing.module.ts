import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { AgregarPruductoComponent } from './components/agregar-pruducto/agregar-pruducto.component';
import { AgregarSitioComponent } from './components/agregar-sitio/agregar-sitio.component';


const routes: Routes = [
  {path: 'listaProductos', component: MostrarListaComponent},
  {path: 'agregarProducto', component: AgregarPruductoComponent},
  {path: 'agregarSitio', component: AgregarSitioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
