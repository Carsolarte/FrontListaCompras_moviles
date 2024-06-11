import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private objRouter:Router){}

  irAgregarProducto(){
    this.objRouter.navigate(['/agregarProducto']);
  }
  irAgregarSitio(){
    this.objRouter.navigate(['/agregarSitio']);
  }
}
