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
  public productos: ProductoModel[] = [];
  public sitios:SitioModel[] = [];
  public objSitioSeleccionado:SitioModel = new SitioModel();

  ngOnInit(): void {
    this.obtenerSitios();
  }

  agregarProducto() {
    this.productos.push(new ProductoModel());
  }

  obtenerSitios(){
    this.objServiceSitio.getSitios().subscribe(
      sitios => this.sitios = sitios
    );
  }

  sitioSeleccionado(event: any, index: number) {
    this.productos[index].id_place = event.target.value;
  }
  irAgregarSitio(){
    this.objRouter.navigate(['/agregarSitio']);
  }
  guardar() {
    console.log('Productos guardados:', this.productos);
    this.objServiceProducto.agregarProductos(this.productos).subscribe(
      response => {
        this.objRouter.navigate(['/listaProductos']);
        console.log(response);
        Swal.fire('Nuevo lista', `Lista de productos registrada con éxito!`, 'success');
      },
      err => {
        console.error(err);
        this.objRouter.navigate(['/listaProductos']);
        Swal.fire('Error', 'No se pudo registrar la lista de productos', 'error');
      }
    );
  }
 
}
