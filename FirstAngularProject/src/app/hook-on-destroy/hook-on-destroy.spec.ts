import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookOnDestroy } from './hook-on-destroy';

describe('HookOnDestroy', () => {
  let component: HookOnDestroy;
  let fixture: ComponentFixture<HookOnDestroy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookOnDestroy],
    }).compileComponents();

    fixture = TestBed.createComponent(HookOnDestroy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
