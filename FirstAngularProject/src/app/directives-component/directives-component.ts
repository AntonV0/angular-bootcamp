import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-directives-component',
  imports: [FormsModule, NgStyle],
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
  role: string = '';

  // 4. Attribute Directive (modifies the appearance or behavior of an element)
  isRed = true;

  // Random RGB colour
  randomColor = 'black';

  generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    this.randomColor = `rgb(${r}, ${g}, ${b})`;
  }

  // 5. Class Attribute Directive (dynamically applies CSS classes to an element)
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  // 6. Style Attribute Directive (dynamically applies inline styles to an element)
  isBlue = true;

  getStyles(){
    return{
      color: this.isBlue ? 'blue' : 'red',
      fontSize: '20px',
      fontWeight: 'bold'
    }
  }
  
  toggleStyle() {
    this.isBlue = !this.isBlue;
  }
}

