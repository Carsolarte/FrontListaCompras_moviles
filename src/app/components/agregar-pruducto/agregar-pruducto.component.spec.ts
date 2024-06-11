import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPruductoComponent } from './agregar-pruducto.component';

describe('AgregarPruductoComponent', () => {
  let component: AgregarPruductoComponent;
  let fixture: ComponentFixture<AgregarPruductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPruductoComponent]
    });
    fixture = TestBed.createComponent(AgregarPruductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
