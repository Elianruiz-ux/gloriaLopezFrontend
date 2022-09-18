import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminHomeComponent } from './navbar-admin-home.component';

describe('NavbarAdminHomeComponent', () => {
  let component: NavbarAdminHomeComponent;
  let fixture: ComponentFixture<NavbarAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
