import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAcordionComponent } from './ventas-acordion.component';

describe('VentasAcordionComponent', () => {
  let component: VentasAcordionComponent;
  let fixture: ComponentFixture<VentasAcordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasAcordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
