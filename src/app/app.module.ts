import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AgregarPruductoComponent } from './components/agregar-pruducto/agregar-pruducto.component';
import { AgregarSitioComponent } from './components/agregar-sitio/agregar-sitio.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoService } from './services/producto.service';
import { SitioService } from './services/sitio.service';
import { ListaService } from './services/lista.service';


@NgModule({
  declarations: [
    AppComponent,
    AgregarPruductoComponent,
    AgregarSitioComponent,
    MostrarListaComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SitioService,ProductoService,ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
