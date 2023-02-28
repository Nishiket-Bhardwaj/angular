import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSRGenerateComponent } from './csr-generate.component';

describe('CSRGenerateComponent', () => {
  let component: CSRGenerateComponent;
  let fixture: ComponentFixture<CSRGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSRGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSRGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
