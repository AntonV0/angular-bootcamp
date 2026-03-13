import { Injectable } from '@angular/core';

// @Injectable is used to mark a class as available to be provided and injected as a dependency.
// providedIn: 'root' means that the service will be available application-wide and there 
// will be a single instance (singleton) of the service throughout the app.

// Without this, add-student and student-list components would not share data as they will create
// separate instances of the Services component, leading to separate student lists.
@Injectable({ 
  providedIn: 'root'
})


export class StudentServices {
  students: any[] = [];

  addStudent(student: any) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}