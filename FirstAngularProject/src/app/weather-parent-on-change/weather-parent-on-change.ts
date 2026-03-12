import { Component } from '@angular/core';
import { WeatherChildOnChange } from '../weather-child-on-change/weather-child-on-change';

@Component({
  selector: 'app-weather-parent-on-change',
  imports: [WeatherChildOnChange],
  templateUrl: './weather-parent-on-change.html',
  styleUrl: './weather-parent-on-change.css',
})
export class WeatherParentOnChange {
  city = 'London';

  changeCity() {
    this.city = 'Chennai';
  }
}
