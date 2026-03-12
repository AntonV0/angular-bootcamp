import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceParent } from './template-reference-parent';

describe('TemplateReferenceParent', () => {
  let component: TemplateReferenceParent;
  let fixture: ComponentFixture<TemplateReferenceParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReferenceParent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
