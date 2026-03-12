import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookDisplay } from './hook-display';

describe('HookDisplay', () => {
  let component: HookDisplay;
  let fixture: ComponentFixture<HookDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(HookDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
