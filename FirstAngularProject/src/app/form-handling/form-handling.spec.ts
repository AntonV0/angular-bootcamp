import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandling } from './form-handling';

describe('FormHandling', () => {
  let component: FormHandling;
  let fixture: ComponentFixture<FormHandling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandling],
    }).compileComponents();

    fixture = TestBed.createComponent(FormHandling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
