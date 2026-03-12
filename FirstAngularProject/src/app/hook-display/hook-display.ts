import { Component } from '@angular/core';
import { WebHookOninit } from '../web-hook-oninit/web-hook-oninit';
import { WeatherParentOnChange } from '../weather-parent-on-change/weather-parent-on-change';


@Component({
  selector: 'app-hook-display',
  imports: [WebHookOninit, WeatherParentOnChange],
  templateUrl: './hook-display.html',
  styleUrl: './hook-display.css',
})
export class HookDisplay {}
  