import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectioneditComponent } from './colectionedit.component';

describe('ColectioneditComponent', () => {
  let component: ColectioneditComponent;
  let fixture: ComponentFixture<ColectioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
