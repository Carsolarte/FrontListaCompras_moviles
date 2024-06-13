import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoExistenteComponent } from './agregar-producto-existente.component';

describe('AgregarProductoExistenteComponent', () => {
  let component: AgregarProductoExistenteComponent;
  let fixture: ComponentFixture<AgregarProductoExistenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProductoExistenteComponent]
    });
    fixture = TestBed.createComponent(AgregarProductoExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
