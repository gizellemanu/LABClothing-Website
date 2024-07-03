import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionsheetComponent } from './colectionsheet.component';

describe('ColectionsheetComponent', () => {
  let component: ColectionsheetComponent;
  let fixture: ComponentFixture<ColectionsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
