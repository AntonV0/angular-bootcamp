import { Component, signal, computed } from '@angular/core';
 
@Component({
  selector: 'app-signals-component',
  imports: [],
  templateUrl: './signals-component.html',
  styleUrl: './signals-component.css',
})
export class SignalsComponent {
  // This signal counter is a reactive state variable that can be used to track and update the count value in the component's template.
  // You read it with count() and update it with count.set(newValue).
  // Angular tracks changes automatically, so when you update the signal, the component will re-render to reflect the new value.
  count = signal(0);
 
  increment() {
    this.count.set(this.count() + 1);
  }

  // This is a regular class property (normal variable counter) that is not reactive. 
  // It will not trigger change detection or re-render the component when updated.
  // You can read and update it like any normal class property, but changes to it won't automatically update the view.
  // In the template, you can display count1 using {{ count1 }} and update it with a button click that calls increment1().
  count1 = 0;

  increment1() {
    this.count1++;
  }

  price = signal(300);
  quantity = signal(1);

  // This is a computed signal that calculates the total price based on the current values of price and quantity.
  // It automatically updates whenever price or quantity (dependent signals) changes, ensuring that the total is always accurate.
  total = computed(() => this.price() * this.quantity());

  increaseQuantity() {
    this.quantity.update((q) => q + 1);
  }

  decreaseQuantity() {
    this.quantity.update((q) => q - 1);
  }
}