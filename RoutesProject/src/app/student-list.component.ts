import { Component } from '@angular/core';
import { StudentServices } from './student.services';

@Component({
  selector: 'app-student-list',
  standalone: true,
  template: `
    <h3>Student List</h3>
    <button (click)="showStudents()">Show Students</button>

    <p>{{ students }}</p>
  `
})
export class StudentListComponent {
  // Constructor dependecy injection is a design pattern in which a class receives its dependencies 
  // from external sources rather than creating them itself. In Angular, this is commonly used to
  // inject services into components, allowing for better modularity and separation of concerns.
  constructor(private studentServices: StudentServices) {}

  students: any;
  showStudents() {
    this.students = JSON.stringify(this.studentServices.getStudents());
    console.log("Data fetched:");
    console.log(this.students);
  }
}