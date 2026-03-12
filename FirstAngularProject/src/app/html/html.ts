// This file defines an Angular component named 'Html' that serves as a template for displaying HTML content in the application. The component is decorated with the @Component decorator, which specifies the selector, template URL, and style URL for the component. The selector 'app-html' allows this component to be used in other templates by including the <app-html> tag. The templateUrl points to the HTML file that contains the structure of the component's view, while the styleUrl points to the CSS file that contains the styles for this component.

import { Component } from '@angular/core';
import { User } from '../user/user';
import { RouterLink } from '@angular/router';
import { Parent } from '../parent/parent';
import { FormHandling } from '../form-handling/form-handling';
import { DirectivesComponent } from '../directives-component/directives-component';
import { TemplateReferenceParent } from '../template-reference-parent/template-reference-parent';

@Component({
  selector: 'app-html',
  imports: [User, RouterLink, Parent, FormHandling, DirectivesComponent, TemplateReferenceParent],
  templateUrl: './html.html',
  styleUrl: './html.css',
})
export class Html {}
