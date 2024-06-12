import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/ProductoModel';
import { SitioModel } from 'src/app/models/SitioModel';
import { ProductoService } from 'src/app/services/producto.service';
import { SitioService } from 'src/app/services/sitio.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-pruducto',
  templateUrl: './agregar-pruducto.component.html',
  styleUrls: ['./agregar-pruducto.component.css']
})
export class AgregarPruductoComponent implements OnInit{
  constructor(private objRouter:Router, private objServiceProducto:ProductoService,private objServiceSitio:SitioService){}
  public producto: ProductoModel = new ProductoModel();
  public sitios:SitioModel[] = [];
  opcionSeleccionada: number = 0;
  public objSitioSeleccionado:SitioModel = new SitioModel();

  ngOnInit(): void {
    this.obtenerSitios();
  }

 
  obtenerSitios(){
    this.objServiceSitio.getSitios().subscribe(
      sitios => this.sitios = sitios
    );
  }

  
  sitioSeleccionado(opSeleccionada: number): void {
    console.log('ID seleccionado:', this.opcionSeleccionada);
    this.opcionSeleccionada = opSeleccionada;
    this.objSitioSeleccionado = this.sitios.find(item => item.id_place === opSeleccionada) || new SitioModel();
    console.log('Sitio seleccionado:', this.objSitioSeleccionado.name_place);
  }
  irAgregarSitio(){
    this.objRouter.navigate(['/agregarSitio']);
  }
 
}
