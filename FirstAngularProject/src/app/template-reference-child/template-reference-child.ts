import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import * as comp from '@angular/core'; - This is an alternative way to import the necessary Angular features, but it is more common and cleaner to import them directly as shown above.

@Component({
  selector: 'app-template-reference-child',
  imports: [],
  templateUrl: './template-reference-child.html',
  styleUrl: './template-reference-child.css',
})
export class TemplateReferenceChild implements AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  // If using the alternative import method, this would be: @comp.ViewChild('video') video!: comp.ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    console.log('Video element loaded');
  }
  
  play() {
    this.video.nativeElement.play();
  }

  pause() {
    this.video.nativeElement.pause();
  }

  get currentTime(): number {
    return this.video.nativeElement.currentTime;
  }
}
