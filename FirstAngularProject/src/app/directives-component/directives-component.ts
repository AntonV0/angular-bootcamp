import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-component',
  imports: [FormsModule],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css',
})
export class DirectivesComponent {
  // 1. Structural Directive (adds or removes elements from the DOM)
  isLoggedIn = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // 2. Loop Directive (repeats elements based on a collection)
  students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  // 3. Switch Directive (conditionally displays elements based on a value)
  role: string = 'admin';
}
