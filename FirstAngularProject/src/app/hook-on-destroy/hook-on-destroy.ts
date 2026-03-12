import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hook-on-destroy',
  imports: [],
  templateUrl: './hook-on-destroy.html',
  styleUrl: './hook-on-destroy.css',
})
export class HookOnDestroy implements OnInit, OnDestroy {
  count = 0;
  interval: any;
  ngOnInit(): void {
    console.log('HookOnDestroy component initialised.');
    this.interval = setInterval(() => {
      this.count++;
      console.log('Count: ', this.count);
    }, 1000);
    // This starts count every time button is clicked, so multiple timers will run if button is clicked multiple times. 
    // To fix this, we clear the previous interval before starting a new one.
  }

  ngOnDestroy(): void {
    console.log('HookOnDestroy component destroyed.');
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
