# Software Development Bootcamp - Angular Module Notes

## Angular Overview
Angular is a popular front-end web application framework developed by Google. It allows developers to build dynamic, single-page applications (SPAs) using TypeScript and HTML. Angular provides a robust set of tools and features for building complex applications, including data binding, dependency injection, and component-based architecture.

## Angular is commonly used for:
1. Building SPAs: Angular is designed for building single-page applications that provide a seamless user experience without the need for page reloads.
2. Enterprise Applications: Angular's modular architecture and powerful features make it a great choice for building large-scale enterprise applications.
3. Progressive Web Apps (PWAs): Angular provides support for building PWAs, which are web applications that can be installed on a user's device and work offline.
4. Mobile Applications: With the help of frameworks like Ionic, Angular can be used to build cross-platform mobile applications.
5. Admin Dashboards: Angular's component-based architecture and powerful data binding make it ideal for building complex admin dashboards and data visualization tools.

## Angular Architecture
Angular follows a component-based architecture, where the application is built as a collection of reusable components. Each component encapsulates its own logic, template, and styles, promoting modularity and maintainability (it is basically a section of the UI). The architecture also includes services for handling business logic and data management, directives for manipulating the DOM, and modules for organising related components and services.

### Architecture Diagram
```
Angular Application
│
├── Modules
│   ├── Feature Modules
│   └── Shared Modules
│
├── Components
│   ├── Root Component (AppComponent)
│   ├── Child Components
│   └── Reusable Components
│
├── Services
│   ├── Data Services
│   ├── Authentication Services
│   └── Utility Services
│
├── Directives
│   ├── Structural Directives (*ngIf, *ngFor)
│   └── Attribute Directives (ngClass, ngStyle)
│
├── Pipes
│   ├── Built-in Pipes (DatePipe, CurrencyPipe)
│   └── Custom Pipes
│
└── Routing
    ├── Route Configuration
    └── Navigation Guards
```

## Key Concepts
### Components
Components are the building blocks of an Angular application. Each component consists of three main parts:
1. **Template**: Defines the HTML structure of the component.
2. **Class**: Contains the logic and data for the component, written in TypeScript.
3. **Styles**: Defines the CSS styles for the component.

Creating a component makes these four files:
1. `component.ts`: The TypeScript file that defines the component's class and logic.
2. `component.html`: The HTML template file that defines the structure and layout of the component's view.
3. `component.css`: The CSS file that contains styles specific to the component.
4. `component.spec.ts`: The TypeScript file that contains unit tests for the component, ensuring its functionality works as expected.

Other important aspects of components include:

1. **Metadata**: Provides additional information about the component, such as its selector and template URL, using the `@Component` decorator.
2. **Lifecycle Hooks**: Angular provides lifecycle hooks that allow you to tap into key moments in a component's lifecycle, such as initialization (`ngOnInit`), changes (`ngOnChanges`), and destruction (`ngOnDestroy`).
3. **Input and Output**: Components can receive data from parent components using `@Input` and emit events to parent components using `@Output`.
4. **Component Interaction**: Components can interact with each other through property binding, event binding, and using services for shared state management.
5. **Component Communication**: Angular provides various ways for components to communicate with each other, including using services, event emitters, and the `@ViewChild` decorator for accessing child components.
6. **Component Reusability**: Components can be reused across different parts of an application, promoting modularity and maintainability. You can create reusable components for common UI elements like buttons, forms, and modals.
7. **Component Testing**: Angular provides tools for testing components, including unit tests with Jasmine and end-to-end tests with Protractor. Writing tests for components helps ensure their functionality and reliability.

### Templates
Templates define the HTML structure of a component's view (basically the HTML UI of the component). They can include standard HTML elements, Angular directives, and data binding expressions. Templates are defined in the `component.html` file and can be associated with a component using the `templateUrl` property in the `@Component` decorator.

### Template References
Template references are a way to access DOM elements or Angular components directly from the template. They are created using the `#` symbol followed by a name, and can be used to reference elements in the template for various purposes, such as setting focus on an input element or calling methods on a child component. For example:
```<input type="text" #inputBox placeholder="Enter your name">
<button (click)="inputBox.focus()">Focus Input</button>
```

 
### Modules
Modules are used to organise an Angular application into cohesive blocks of functionality. An Angular application typically has a root module (AppModule) and can have multiple feature modules. Modules help in managing dependencies and improving the maintainability of the application.

### Services
Services are used to share data and logic across different components in an Angular application. They are typically used for tasks such as fetching data from APIs, managing state, and handling business logic. Services are created using the `@Injectable` decorator and can be injected into components or other services using Angular's dependency injection system.

### Directives
Directives are special markers in the DOM that tell Angular to do something with a DOM element. There are three types of directives:
1. **Component Directives**: These are directives with a template, used to create components. For example, `<app-user></app-user>` is a component directive that renders the User component.
2. **Structural Directives**: These change the structure of the DOM, such as `*ngIf` and `*ngFor`. For example,
```
<p *ngIf="isVisible">This paragraph will only be displayed if isVisible is true.</p>
```
3. **Attribute Directives**: These change the appearance or behavior of an element, such as `ngClass` and `ngStyle`. For example,
```
<div [ngClass]="{'active': isActive}">This div will have the 'active' class if isActive is true.</div>
``` 
Another example using `ngStyle`:
```
<div [ngStyle]="{'color': isRed ? 'red' : 'blue'}">This div will be red if isRed is true, otherwise it will be blue.</div>
```

### Data Binding
Data binding is a powerful feature in Angular that allows you to synchronize data between the component class and the template. There are four types of data binding:
1. **Interpolation**: `{{ expression }}` - Used to display data from the component in the template.
2. **Property Binding**: `[property]="expression"` - Used to bind a property of an HTML element to a component property (saves data from component to HTML element property).
3. **Event Binding**: `(event)="handler"` - Used to bind an event to a method in the component (sends data from HTML element to component).
4. **Two-way Binding**: `[(ngModel)]="property"` - Used to bind a property in the component to an input element in the template, allowing for two-way data flow (can read and update data from HTML to component and vice versa).

### Routing
Angular's Router module allows you to define navigation paths in your application. You can configure routes to map URLs to specific components, enabling users to navigate between different views of the application. The router also supports features like route guards for protecting routes and lazy loading for improving performance.

## Angular CLI
The Angular CLI (Command Line Interface) is a powerful tool that helps developers create, build, and manage Angular applications. It provides commands for generating components, services, modules, and more, as well as for running development servers and building production-ready applications.

### Common Angular CLI Commands
- `ng new [project-name]`: Creates a new Angular project.
- `ng generate component [component-name]`: Generates a new component.
- `ng generate service [service-name]`: Generates a new service.
- `ng serve`: Runs the development server.
- `ng build`: Builds the application for production.
- `ng test`: Runs unit tests.
- `ng e2e`: Runs end-to-end tests.
- `ng add [package-name]`: Adds a new package to the project.
- `ng update [package-name]`: Updates an existing package in the project.
- `ng lint`: Runs the linter to check for code quality issues.
- `ng generate module [module-name]`: Generates a new module.
- `ng generate directive [directive-name]`: Generates a new directive.
- `ng generate pipe [pipe-name]`: Generates a new pipe.
- `ng generate guard [guard-name]`: Generates a new route guard.
- `ng generate class [class-name]`: Generates a new class.
- `ng generate interface [interface-name]`: Generates a new interface.
- `ng generate enum [enum-name]`: Generates a new enum.

## Angular Component Lifecycle Hooks
Angular components have a lifecycle that consists of various stages, and Angular provides lifecycle hooks that allow you to tap into these stages to perform specific actions. Some of the most commonly used lifecycle hooks include:
1. `ngOnInit()`: Called once the component is initialized. This is a good place to perform component initialization logic, such as fetching data from a service.
2. `ngOnChanges(changes: SimpleChanges)`: Called whenever an input property changes. This is useful for reacting to changes in input data.
3. `ngOnDestroy()`: Called just before the component is destroyed. This is a good place to clean up resources, such as unsubscribing from observables or detaching event handlers.
4. `ngAfterViewInit()`: Called after the component's view has been fully initialized. This is useful for performing actions that require access to the component's view, such as manipulating the DOM or initializing third-party libraries.
5. `ngAfterContentInit()`: Called after the component's content has been projected into the view. This is useful for performing actions that require access to projected content, such as querying for content children.
6. `ngAfterViewChecked()`: Called after the component's view has been checked for changes. This is useful for performing actions that need to occur after the view has been updated, such as updating the UI based on changes in data.

## Angular Services and Dependency Injection
Services in Angular are used to share data and logic across different components. They are typically used for tasks such as fetching data from APIs, managing state, and handling business logic. Angular's dependency injection system allows you to inject services into components or other services, promoting modularity and reusability. To create a service, you can use the Angular CLI command `ng generate service [service-name]`, which will create a new service file with the `@Injectable` decorator. You can then inject the service into a component by adding it to the constructor of the component class. For example:
```typescript
import { MyService } from './my.service';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css']
})
export class MyComponent {
  constructor(private myService: MyService) {
    // You can now use myService to access its methods and properties
  }
}
```
Services can also be provided at different levels in the application, such as at the root level (available throughout the entire application) or at the component level (available only to a specific component and its children). This allows for flexible and efficient management of dependencies in an Angular application.

## Pipes
Pipes in Angular are used to transform data in templates. They take in data as input and return a transformed version of that data. Angular provides several built-in pipes, such as `DatePipe`, `CurrencyPipe`, and `UpperCasePipe`, which can be used to format dates, currency values, and text, respectively. You can also create custom pipes to perform specific transformations that are not covered by the built-in pipes. 

Common built-in pipes include:
- `DatePipe`: Formats dates according to a specified format.
- `CurrencyPipe`: Formats numbers as currency values.
- `UpperCasePipe`: Transforms text to uppercase.
- `LowerCasePipe`: Transforms text to lowercase.
- `TitleCasePipe`: Transforms text to title case (first letter of each word capitalized).
- `DecimalPipe`: Formats numbers as decimal values with specified precision.
- `PercentPipe`: Formats numbers as percentages.
- `JsonPipe`: Converts an object into a JSON string for display.
- `SlicePipe`: Slices a portion of an array or string based on specified start and end indices.
- `AsyncPipe`: Unwraps values from asynchronous sources such as Observables or Promises.
- `CurrencyPipe`: Formats a number as currency according to locale rules.
- `SlicePipe`: Slices an array or string into a subset based on specified start and end indices.
- `NumberPipe`: Formats a number according to locale rules, with options for decimal places and grouping.

To create a custom pipe, you can use the Angular CLI command `ng generate pipe [pipe-name]`, which will create a new pipe file with the `@Pipe` decorator. For example:
```typescript
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }
}
```
You can then use this custom pipe in your templates like this:
```html
<p>{{ 2 | exponentialStrength: 3 }}</p> <!-- This will output 8 (2 raised to the power of 3) -->
```

## Best Practices
1. **Use Angular CLI**: Leverage the Angular CLI for generating components, services, and modules to maintain consistency and save time.
2. **Organize Code with Modules**: Use feature modules to organize related components and services, improving maintainability.
3. **Use Services for Business Logic**: Keep business logic in services rather than components to promote separation of concerns and reusability.
4. **Use Reactive Forms**: For complex forms, use Reactive Forms for better control and validation.
5. **Optimise Performance**: Use lazy loading for modules and components to improve the performance of your application.

## Testing
Angular provides robust support for testing applications. You can use tools like Jasmine and Karma for unit testing components and services, and Protractor for end-to-end testing. Writing tests helps ensure the reliability and maintainability of your application.

## Angular Project Structure (Modern Angular - Standalone)

- Create a new project with: `ng new project-name`
- cd into the project folder: `cd project-name`
- Check the version of Angular: `ng version`
- Start the development server: `ng serve` or use the alias `npm start`
- Open the application in a browser at `http://localhost:4200/`


### A typical modern Angular project created with the Angular CLI contains the following important files and folders:
```
Project-name/
│
├── .angular/                 # Angular CLI cache (build optimisation files)
│
├── .github/                  # GitHub configuration
│   └── copilot-instructions.md   # Instructions for GitHub Copilot AI assistant (optional)
│
├── .vscode/                  # VS Code workspace settings
│   ├── extensions.json       # Recommended extensions for this project
│   ├── launch.json           # Debug configuration
│   ├── mcp.json              # VS Code tool configuration (optional)
│   └── tasks.json            # Custom build or run tasks
│
├── node_modules/             # Installed npm packages and dependencies
│
├── public/                   # Static files served directly
│   └── favicon.ico           # Website icon shown in browser tab
│
├── src/                      # Main application source code
│   │
│   ├── app/                  # Core Angular application code
│   │
│   │   ├── app.config.ts     # Global application configuration
│   │   │                     # Registers providers, routing, and services
│   │   │
│   │   ├── app.css           # Styles specific to the root component
│   │   │
│   │   ├── app.html          # Template of the root component
│   │   │
│   │   ├── app.routes.ts     # Application routing configuration
│   │   │                     # Defines navigation between pages/components
│   │   │
│   │   ├── app.spec.ts       # Unit tests for the root component
│   │   │
│   │   └── app.ts            # Root component of the application
│   │                         # Main UI entry point
│   │
│   ├── index.html            # Main HTML page loaded by the browser
│   │                         # Angular injects the app into this page
│   │
│   ├── main.ts               # Application entry point
│   │                         # Bootstraps the Angular application
│   │
│   └── styles.css            # Global styles applied across the entire app
│
├── .editorconfig             # Code style rules for editors
│
├── .gitignore                # Files and folders Git should ignore
│
├── .prettierrc               # Prettier formatting rules for consistent code style
│
├── angular.json              # Angular CLI workspace configuration
│                             # Defines build settings, assets, and project structure
│
├── package.json              # Project metadata and npm dependencies
│                             # Also defines scripts like `npm start`
│
├── package-lock.json         # Locks exact versions of installed dependencies
│
├── tsconfig.json             # Base TypeScript compiler configuration
│
├── tsconfig.app.json         # TypeScript config specifically for the Angular app
│
└── tsconfig.spec.json        # TypeScript configuration for unit tests
```

Other important files added when creating an Angular project include:
- `README.md`: A markdown file that provides an overview of the project, instructions for setup, and other relevant information.
- `LICENSE`: A file that specifies the licensing terms for the project.

### Structure of components in Angular
In Angular, components are organised in a modular way. Each component typically consists of the following files:
- `component.ts`: The TypeScript file that defines the component's class, logic, and metadata using the `@Component` decorator.
- `component.html`: The HTML template file that defines the structure and layout of the component's view.
- `component.css`: The CSS file that contains styles specific to the component, which are applied only to the component's template.
- `component.spec.ts`: The TypeScript file that contains unit tests for the component, ensuring its functionality works as expected.

## Conclusion
Angular is a powerful framework for building modern web applications. By understanding its core concepts such as components and modules, services, directives, and data binding, developers can create dynamic and responsive applications. The Angular CLI further enhances productivity by providing a streamlined workflow for development and deployment.

