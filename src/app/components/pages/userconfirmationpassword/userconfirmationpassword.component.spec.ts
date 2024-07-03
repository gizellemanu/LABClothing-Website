import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconfirmationpasswordComponent } from './userconfirmationpassword.component';

describe('UserconfirmationpasswordComponent', () => {
  let component: UserconfirmationpasswordComponent;
  let fixture: ComponentFixture<UserconfirmationpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserconfirmationpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserconfirmationpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
