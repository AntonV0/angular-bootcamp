import { Component } from '@angular/core';
import { StudentServices } from './student.services';

@Component({
  selector: 'app-add-student',
  standalone: true, // Standalone components are self-contained and can be used without being declared in an NgModule.
  // Useful for simple components or when you want to avoid the overhead of creating a module for a single component.
  template: ` 
    <h3>Add Student</h3>
    <button (click)="addStudent()">Add Student</button>
  `
  // Use backticks for multi-line templates
})

export class AddStudentComponent {
    constructor(private studentServices: StudentServices) {}

    addStudent() {
      this.studentServices.addStudent({ name: 'John Doe'});
      console.log("Student added:");
      console.log(this.studentServices.students);
    }
}