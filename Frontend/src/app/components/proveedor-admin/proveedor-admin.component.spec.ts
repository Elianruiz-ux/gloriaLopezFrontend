import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAdminComponent } from './proveedor-admin.component';

describe('ProveedorAdminComponent', () => {
  let component: ProveedorAdminComponent;
  let fixture: ComponentFixture<ProveedorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
