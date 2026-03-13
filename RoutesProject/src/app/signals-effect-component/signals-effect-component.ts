import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals-effect-component',
  imports: [],
  templateUrl: './signals-effect-component.html',
  styleUrl: './signals-effect-component.css',
})
export class SignalsEffectComponent {
  theme = signal('light'); // signal() is used to create a reactive signal that holds a value and can be updated

  constructor() {
    effect(() => { // effect() is used to create a reactive effect that runs whenever the signal it depends on changes
      document.body.className = this.theme();
      console.log(`Theme changed to: ${this.theme()}`);
    });
  }

  toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}
