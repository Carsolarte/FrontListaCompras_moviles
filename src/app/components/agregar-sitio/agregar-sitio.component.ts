import { Component } from '@angular/core';
import { SitioModel } from 'src/app/models/SitioModel';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SitioService } from 'src/app/services/sitio.service';
@Component({
  selector: 'app-agregar-sitio',
  templateUrl: './agregar-sitio.component.html',
  styleUrls: ['./agregar-sitio.component.css']
})
export class AgregarSitioComponent {
  public sitio: SitioModel = new SitioModel();
  constructor(private objRouter:Router,private objService:SitioService) { }
  irAgregarProducto(){
    this.objRouter.navigate(['/agregarProducto']);
  }
  agregarSitio(){
    this.objService.agregarSitio(this.sitio).subscribe(
      response => {
        this.irAgregarProducto();
        console.log(response);
        Swal.fire('Nuevo lugar', `Lugar registrado con éxito!`, 'success');
      },
      err => {
        console.error(err);
        this.irAgregarProducto();
        Swal.fire('Error', 'No se pudo registrar el lugar', 'error');
      }
    );
  }
}
