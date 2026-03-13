import { Component } from '@angular/core';
import { AddStudentComponent } from '../add-student.component';
import { StudentListComponent } from '../student-list.component';
import { PipesComponent } from '../pipes-component/pipes-component';
import { SignalsComponent } from '../signals-component/signals-component';
import { SignalsEffectComponent } from '../signals-effect-component/signals-effect-component';


@Component({
  selector: 'app-main-menu',
  imports: [AddStudentComponent, StudentListComponent, PipesComponent, SignalsComponent, SignalsEffectComponent],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {}
