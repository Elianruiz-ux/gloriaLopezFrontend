import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProvAdminComponent } from './editar-prov-admin.component';

describe('EditarProvAdminComponent', () => {
  let component: EditarProvAdminComponent;
  let fixture: ComponentFixture<EditarProvAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProvAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProvAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
