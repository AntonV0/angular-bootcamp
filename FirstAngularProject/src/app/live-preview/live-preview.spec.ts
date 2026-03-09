import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePreview } from './live-preview';

describe('LivePreview', () => {
  let component: LivePreview;
  let fixture: ComponentFixture<LivePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(LivePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
