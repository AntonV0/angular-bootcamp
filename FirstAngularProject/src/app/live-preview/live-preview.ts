import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-preview',
  imports: [FormsModule],
  templateUrl: './live-preview.html',
  styleUrl: './live-preview.css',
})
export class LivePreview {
  message: string = '';
}
