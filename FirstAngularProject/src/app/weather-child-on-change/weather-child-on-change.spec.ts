import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChildOnChange } from './weather-child-on-change';

describe('WeatherChildOnChange', () => {
  let component: WeatherChildOnChange;
  let fixture: ComponentFixture<WeatherChildOnChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherChildOnChange],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherChildOnChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
