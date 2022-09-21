import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserHomeComponent } from './navbar-user-home.component';

describe('NavbarUserHomeComponent', () => {
  let component: NavbarUserHomeComponent;
  let fixture: ComponentFixture<NavbarUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
