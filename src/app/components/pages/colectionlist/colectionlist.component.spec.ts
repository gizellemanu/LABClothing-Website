import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionlistComponent } from './colectionlist.component';

describe('ColectionlistComponent', () => {
  let component: ColectionlistComponent;
  let fixture: ComponentFixture<ColectionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
