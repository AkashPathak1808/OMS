import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosDevelopmentComponent } from './ios-development.component';

describe('IosDevelopmentComponent', () => {
  let component: IosDevelopmentComponent;
  let fixture: ComponentFixture<IosDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IosDevelopmentComponent]
    });
    fixture = TestBed.createComponent(IosDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
