// Here we define the root component of our Angular application. This component serves as the main entry point for the UI and is responsible for rendering the overall layout and structure of the app. It also includes a signal for the title, which can be used to display dynamic content in the template.

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // This is the custom HTML tag that represents this component in the DOM
  imports: [RouterOutlet], // This allows us to use the <router-outlet> directive in our template for routing
  templateUrl: './app.html', // The HTML template for this component, which defines the structure of the UI
  styleUrl: './app.css' // The CSS styles specific to this component, which will be applied to the template
})
export class App { // The main class for the root component
  protected readonly title = signal('FirstAngularProject'); // A signal that holds the title of the application, which can be used in the template for dynamic updates
  name = 'Anton'; // A property that holds the name of the user, which can be used in the template for dynamic updates
}
