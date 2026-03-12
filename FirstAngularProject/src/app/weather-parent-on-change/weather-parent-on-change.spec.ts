import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherParentOnChange } from './weather-parent-on-change';

describe('WeatherParentOnChange', () => {
  let component: WeatherParentOnChange;
  let fixture: ComponentFixture<WeatherParentOnChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherParentOnChange],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherParentOnChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
