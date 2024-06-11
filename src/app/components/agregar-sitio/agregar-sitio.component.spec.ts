import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSitioComponent } from './agregar-sitio.component';

describe('AgregarSitioComponent', () => {
  let component: AgregarSitioComponent;
  let fixture: ComponentFixture<AgregarSitioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarSitioComponent]
    });
    fixture = TestBed.createComponent(AgregarSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
