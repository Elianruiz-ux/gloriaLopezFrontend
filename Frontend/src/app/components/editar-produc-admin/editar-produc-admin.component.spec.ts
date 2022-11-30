import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProducAdminComponent } from './editar-produc-admin.component';

describe('EditarProducAdminComponent', () => {
  let component: EditarProducAdminComponent;
  let fixture: ComponentFixture<EditarProducAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProducAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProducAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
