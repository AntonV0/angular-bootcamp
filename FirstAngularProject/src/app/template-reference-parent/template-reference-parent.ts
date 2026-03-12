import { Component } from '@angular/core';
import { TemplateReferenceChild } from '../template-reference-child/template-reference-child';

@Component({
  selector: 'app-template-reference-parent',
  imports: [TemplateReferenceChild],
  templateUrl: './template-reference-parent.html',
  styleUrl: './template-reference-parent.css',
})
export class TemplateReferenceParent {}
