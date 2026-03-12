import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-child-on-change',
  imports: [],
  templateUrl: './weather-child-on-change.html',
  styleUrl: './weather-child-on-change.css',
})
export class WeatherChildOnChange implements OnChanges {
  @Input() city!: string;

  weatherData: any;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['city']) {
      // Handle the change in the city input
      const apiKey = 'fc349e654d58a6e1d31750caac99d4b6';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

      this.http.get(apiUrl).subscribe(
        (data) => {
          this.weatherData = data;
          console.log('Weather data for', this.city, ':', this.weatherData);
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
    }
  }
}
