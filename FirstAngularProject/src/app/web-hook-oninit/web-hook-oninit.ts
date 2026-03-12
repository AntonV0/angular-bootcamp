import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// HttpClient is an Angular service that allows you to make HTTP requests to a backend server. It provides methods for performing various types of HTTP operations, such as GET, POST, PUT, DELETE, etc. In this component, HttpClient is used to fetch weather data from an external API based on the city specified in the 'city' property.

import { Subscription } from 'rxjs';
// Subscription is a class from the RxJS library (Reactive Extensions for JavaScript) that represents a disposable resource, usually the execution of an Observable. It allows you to manage and clean up resources when they are no longer needed. In this component, Subscription can be used to manage any subscriptions to Observables that may be created, such as those from HTTP requests or other asynchronous operations. By unsubscribing from these subscriptions when the component is destroyed, you can prevent memory leaks and ensure that resources are properly released.

import { HookOnDestroy } from '../hook-on-destroy/hook-on-destroy';

@Component({
  selector: 'app-web-hook-oninit',
  imports: [HookOnDestroy],
  templateUrl: './web-hook-oninit.html',
  styleUrl: './web-hook-oninit.css',
})
export class WebHookOninit implements OnInit, AfterViewInit {
  // This is a lifecycle hook method that gets called once the component has been initialized. It is commonly used to perform any necessary setup or initialization tasks for the component, such as fetching data or setting up subscriptions.
  city: string = 'chennai';
  weatherData: any = null;
  apiKey = 'fc349e654d58a6e1d31750caac99d4b6';
  weatherSubscription!: Subscription;
  image_path = '../../assets/images/dog.jpg';

  constructor(private http: HttpClient) {}
  // Angular will automatically inject the HttpClient service into the component's constructor, allowing you to use it to make HTTP requests. In this case, the ngOnInit method is used to fetch weather data for the specified city when the component is initialized.
  // This concept is known as Dependency Injection, where Angular provides the necessary dependencies (in this case, HttpClient) to the component when it is created. This allows for better modularity and separation of concerns in the application.

  ngOnInit() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
      this.weatherSubscription = this.http.get(url).subscribe(
        (data: any) => {
          this.weatherData = data;
          console.log('Weather Data: ', this.weatherData);
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
  }

  ngOnDestroy() {
      // Unsubscribe from the weather data subscription to prevent memory leaks
      if (this.weatherSubscription) {
          this.weatherSubscription.unsubscribe();
      }
  }


  @ViewChild('title') heading!: ElementRef;
  @ViewChild('inputBox') inputBox!: ElementRef;
  // The @ViewChild decorator is used to access a child element in the component's template. In this case, it is used to access the elements with the template reference variables 'title' and 'inputBox'. The ElementRef type allows you to interact with the native DOM elements directly. This can be useful for tasks such as manipulating the DOM or accessing properties of the elements.
  // heading and inputBox are properties that will hold references to the DOM elements with the specified template reference variables. You can use these properties to access and manipulate the elements in your component's logic, such as changing their styles, adding event listeners, or retrieving their values.
  // ElementRef is a wrapper around a native DOM element. It provides a way to access the underlying DOM element and its properties. In this case, heading and inputBox will hold references to the DOM elements with the template reference variables 'title' and 'inputBox', respectively. You can use these references to perform various operations on the elements, such as changing their styles, adding event listeners, or retrieving their values.


  ngAfterViewInit() {
      console.log('Component view has been fully loaded and initialized.');

      // Change the color of the heading element
      this.heading.nativeElement.style.color = 'blue';

      // Set focus to the input box
      this.inputBox.nativeElement.focus();
  }
  // The ngAfterViewInit lifecycle hook is called after the component's view has been fully initialized. This is a good place to perform any additional setup that requires access to the component's view or child components. In this example, it simply logs a message to the console indicating that the component's view has been initialized.

  showTimer = true;

  toggle() {
    this.showTimer = !this.showTimer;
  }
}
