import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtiServicioAdminComponent } from './edti-servicio-admin.component';

describe('EdtiServicioAdminComponent', () => {
  let component: EdtiServicioAdminComponent;
  let fixture: ComponentFixture<EdtiServicioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtiServicioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdtiServicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
