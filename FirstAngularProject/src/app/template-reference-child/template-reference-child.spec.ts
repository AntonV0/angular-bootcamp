import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceChild } from './template-reference-child';

describe('TemplateReferenceChild', () => {
  let component: TemplateReferenceChild;
  let fixture: ComponentFixture<TemplateReferenceChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReferenceChild],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
