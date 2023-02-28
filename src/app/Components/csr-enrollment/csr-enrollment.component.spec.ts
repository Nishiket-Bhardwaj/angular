import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSREnrollmentComponent } from './csr-enrollment.component';

describe('CSREnrollmentComponent', () => {
  let component: CSREnrollmentComponent;
  let fixture: ComponentFixture<CSREnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSREnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSREnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
