import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-pipes-component',
  imports: [CommonModule, ReversePipe],
  templateUrl: './pipes-component.html',
  styleUrl: './pipes-component.css',
})
export class PipesComponent {
  name = "angular framework";
  today = new Date();
  price = 500;
  percentageValue = 0.75;
  numberValue = 1234.56789;
  text = "AngularLearning";
  student = {
    name: "Kim",
    age: 25,
    course: "Angular"
  };
  numberArray = [10, 20, 30, 40, 50];
  asyncData$: Observable<string> = of("Data from Observable");
  originalText = "Angular Pipes";

  // ? User defined pipes:
  // A user-defined pipe is a custom transformation function that you can create in Angular to format or transform data in your templates.
  // To create a user-defined pipe, you need to implement the PipeTransform interface and decorate your class with the @Pipe decorator.
}
