import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioDOSComponent } from './inventario-dos.component';

describe('InventarioDOSComponent', () => {
  let component: InventarioDOSComponent;
  let fixture: ComponentFixture<InventarioDOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioDOSComponent]
    });
    fixture = TestBed.createComponent(InventarioDOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
