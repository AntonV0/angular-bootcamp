import { Routes } from '@angular/router';
import { Html } from './html/html';
import { LivePreview } from './live-preview/live-preview';

export const routes: Routes = [
  { path: '', component: Html },
  { path: 'preview', component: LivePreview },
];
