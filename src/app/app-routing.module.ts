import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { AgregarPruductoComponent } from './components/agregar-pruducto/agregar-pruducto.component';
import { AgregarSitioComponent } from './components/agregar-sitio/agregar-sitio.component';
import { AgregarProductoExistenteComponent } from './components/agregar-producto-existente/agregar-producto-existente.component';


const routes: Routes = [
  {path: 'listaProductos', component: MostrarListaComponent},
  {path: 'agregarProducto', component: AgregarPruductoComponent},
  {path: 'agregarSitio', component: AgregarSitioComponent},
  {path: 'agregarSitio/:id', component: AgregarProductoExistenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
