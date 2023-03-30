import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingMarksComponent } from './adding-marks.component';

describe('AddingMarksComponent', () => {
  let component: AddingMarksComponent;
  let fixture: ComponentFixture<AddingMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
