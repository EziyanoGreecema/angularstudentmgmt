import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubjectModalComponent } from './update-subject-modal.component';

describe('UpdateSubjectModalComponent', () => {
  let component: UpdateSubjectModalComponent;
  let fixture: ComponentFixture<UpdateSubjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubjectModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
