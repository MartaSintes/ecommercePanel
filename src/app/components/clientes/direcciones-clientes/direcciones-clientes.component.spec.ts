import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesClientesComponent } from './direcciones-clientes.component';

describe('DireccionesClientesComponent', () => {
  let component: DireccionesClientesComponent;
  let fixture: ComponentFixture<DireccionesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DireccionesClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
