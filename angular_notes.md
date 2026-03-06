# Software Development Bootcamp - Angular Module Notes

## Angular Overview
Angular is a popular front-end web application framework developed by Google. It allows developers to build dynamic, single-page applications (SPAs) using TypeScript and HTML. Angular provides a robust set of tools and features for building complex applications, including data binding, dependency injection, and component-based architecture.

## Angular is commonly used for:
1. Building SPAs: Angular is designed for building single-page applications that provide a seamless user experience without the need for page reloads.
2. Enterprise Applications: Angular's modular architecture and powerful features make it a great choice for building large-scale enterprise applications.
3. Progressive Web Apps (PWAs): Angular provides support for building PWAs, which are web applications that can be installed on a user's device and work offline.
4. Mobile Applications: With the help of frameworks like Ionic, Angular can be used to build cross-platform mobile applications.
5. Admin Dashboards: Angular's component-based architecture and powerful data binding make it ideal for building complex admin dashboards and data visualization tools.

## Key Concepts
### Components
Components are the building blocks of an Angular application. Each component consists of three main parts:
1. **Template**: Defines the HTML structure of the component.
2. **Class**: Contains the logic and data for the component, written in TypeScript.
3. **Styles**: Defines the CSS styles for the component.

Other important aspects of components include:

1. **Metadata**: Provides additional information about the component, such as its selector and template URL, using the `@Component` decorator.
2. **Lifecycle Hooks**: Angular provides lifecycle hooks that allow you to tap into key moments in a component's lifecycle, such as initialization (`ngOnInit`), changes (`ngOnChanges`), and destruction (`ngOnDestroy`).
3. **Input and Output**: Components can receive data from parent components using `@Input` and emit events to parent components using `@Output`.
4. **Component Interaction**: Components can interact with each other through property binding, event binding, and using services for shared state management.
5. **Component Communication**: Angular provides various ways for components to communicate with each other, including using services, event emitters, and the `@ViewChild` decorator for accessing child components.
6. **Component Reusability**: Components can be reused across different parts of an application, promoting modularity and maintainability. You can create reusable components for common UI elements like buttons, forms, and modals.
7. **Component Testing**: Angular provides tools for testing components, including unit tests with Jasmine and end-to-end tests with Protractor. Writing tests for components helps ensure their functionality and reliability.

### Modules
Modules are used to organize an Angular application into cohesive blocks of functionality. An Angular application typically has a root module (AppModule) and can have multiple feature modules. Modules help in managing dependencies and improving the maintainability of the application.

### Services
Services are used to share data and logic across different components in an Angular application. They are typically used for tasks such as fetching data from APIs, managing state, and handling business logic. Services are created using the `@Injectable` decorator and can be injected into components or other services using Angular's dependency injection system.

### Directives
Directives are special markers in the DOM that tell Angular to do something with a DOM element. There are three types of directives:
1. **Component Directives**: These are directives with a template, used to create components
2. **Structural Directives**: These change the structure of the DOM, such as `*ngIf` and `*ngFor`.
3. **Attribute Directives**: These change the appearance or behavior of an element, such as `ngClass` and `ngStyle`.

### Data Binding
Data binding is a powerful feature in Angular that allows you to synchronize data between the component class and the template. There are four types of data binding:
1. **Interpolation**: `{{ expression }}` - Used to display data from the component in the template.
2. **Property Binding**: `[property]="expression"` - Used to bind a property of an HTML element to a component property.
3. **Event Binding**: `(event)="handler"` - Used to bind an event to a method in the component.
4. **Two-way Binding**: `[(ngModel)]="property"` - Used to bind a property in the component to an input element in the template, allowing for two-way data flow.

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



## Best Practices
1. **Use Angular CLI**: Leverage the Angular CLI for generating components, services, and modules to maintain consistency and save time.
2. **Organize Code with Modules**: Use feature modules to organize related components and services, improving maintainability.
3. **Use Services for Business Logic**: Keep business logic in services rather than components to promote separation of concerns and reusability.
4. **Use Reactive Forms**: For complex forms, use Reactive Forms for better control and validation.
5. **Optimize Performance**: Use lazy loading for modules and components to improve the performance of your application.

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

