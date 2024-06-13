import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoListaModel } from 'src/app/models/PruductoLista';
import { SitioModel } from 'src/app/models/SitioModel';
import { ListaService } from 'src/app/services/lista.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SitioService } from 'src/app/services/sitio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto-existente',
  templateUrl: './agregar-producto-existente.component.html',
  styleUrls: ['./agregar-producto-existente.component.css']
})
export class AgregarProductoExistenteComponent implements OnInit{
    public listaId:number = 0;
    public listaProductos:ProductoListaModel[] = [];
    public sitios:SitioModel[] = [];
    constructor( private objRouter:Router,private route: ActivatedRoute, private objListService:ListaService,private objServiceSitio:SitioService,private objServiceProducto:ProductoService) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.listaId = Number(params['id']); 
      });
      this.obtenerProductos();
      this.obtenerSitios();
    }
    obtenerProductos(){
      this.objListService.getListaById(this.listaId).subscribe(
        productos => this.listaProductos = productos
      );
    }
    sitioSeleccionado(event: any, index: number) {
      this.listaProductos[index].id_place = event.target.value;
    }
    obtenerSitios(){
      this.objServiceSitio.getSitios().subscribe(
        sitios => this.sitios = sitios
      );
    }
    irAgregarSitio(){
      this.objRouter.navigate(['/agregarSitio']);
    }
    agregarProducto() {
      this.listaProductos.push(new ProductoListaModel());
    }
    cancelar(){
      this.objRouter.navigate(['/listaProductos']);
    }
    guardar() {
      console.log('Productos guardados:', this.listaProductos);
      this.objServiceProducto.agregarProductos(this.listaProductos).subscribe(
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
