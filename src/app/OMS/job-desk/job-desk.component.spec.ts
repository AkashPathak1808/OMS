import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDeskComponent } from './job-desk.component';

describe('JobDeskComponent', () => {
  let component: JobDeskComponent;
  let fixture: ComponentFixture<JobDeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobDeskComponent]
    });
    fixture = TestBed.createComponent(JobDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
