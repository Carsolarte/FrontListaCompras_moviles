import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-pruducto',
  templateUrl: './agregar-pruducto.component.html',
  styleUrls: ['./agregar-pruducto.component.css']
})
export class AgregarPruductoComponent {
  constructor(private objRouter:Router){}
  irAgregarSitio(){
    this.objRouter.navigate(['/agregarSitio']);
  }
}
