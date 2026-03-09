import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html } from './html';

describe('Html', () => {
  let component: Html;
  let fixture: ComponentFixture<Html>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Html],
    }).compileComponents();

    fixture = TestBed.createComponent(Html);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
