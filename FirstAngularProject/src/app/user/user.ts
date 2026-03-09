import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // A property to hold the name of the user, which can be used in the template for dynamic updates
  name: string = 'User Component';

  count = 0;
  increment() {
    this.count++;
  }
} 
