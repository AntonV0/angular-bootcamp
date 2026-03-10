import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-handling',
  imports: [FormsModule],
  templateUrl: './form-handling.html',
  styleUrl: './form-handling.css',
})
export class FormHandling {
  user = {
    name:'',
    email: '',
    password: '',
  };

  // A property to hold the submitted user data, which can be used for displaying or further processing after form submission
  submittedUser: any = null;

  submitForm(form: any) {
    if (form.invalid) {
      return; // If the form is invalid, do not proceed with submission and simply return from the function.
    }
    
    this.submittedUser = { ...this.user }; // Create a copy of the user object to avoid reference issues
    console.log('Form submitted:', this.submittedUser); // Log the submitted user data to the console for verification
  }
}