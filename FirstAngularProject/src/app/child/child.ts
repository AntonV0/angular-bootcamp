import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // This allows the Child component to receive data from its parent component. 
  // The @Input() decorator indicates that the 'data' property can be bound to by a parent component,
  // enabling the Child component to display or use the data passed down from the Parent component.
  @Input() data: string = ''; 
}
