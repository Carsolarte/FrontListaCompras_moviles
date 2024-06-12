import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/ListaModel';
import { SitioModel } from 'src/app/models/SitioModel';
import { ListaService } from 'src/app/services/lista.service';
import { SitioService } from 'src/app/services/sitio.service';
@Component({
  selector: 'app-mostrar-lista',
  templateUrl: './mostrar-lista.component.html',
  styleUrls: ['./mostrar-lista.component.css']
})
export class MostrarListaComponent implements OnInit{
  public listas:ListaModel[] = [];
  public sitios:SitioModel[] = [];
  public sitioDiccionario: { [key: number]: string } = {};
  constructor(private objListaService: ListaService,private objServiceSitio:SitioService) { }
  ngOnInit(): void {
    this.getListas();
    this.obtenerSitios();
  }
  obtenerSitios(){
    this.objServiceSitio.getSitios().subscribe(
      sitios => {
        this.sitios = sitios;
        this.crearDiccionarioSitios();
      }
    );
  }
  crearDiccionarioSitios() {
    this.sitioDiccionario = {};
    this.sitios.forEach(sitio => {
      this.sitioDiccionario[sitio.id_place] = sitio.name_place;
    });
  }
  obtenerNombreSitio(idPlace: number): string {
    return this.sitioDiccionario[idPlace] || 'Sitio Desconocido';
  }
  
  getListas(){
    this.objListaService.getListas().subscribe(
      listas => this.listas = listas
    );
  }
}
