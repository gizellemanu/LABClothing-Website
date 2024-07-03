import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsheetComponent } from './modelsheet.component';

describe('ModelsheetComponent', () => {
  let component: ModelsheetComponent;
  let fixture: ComponentFixture<ModelsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
