import { Routes } from '@angular/router';
import { Html } from './html/html';
import { LivePreview } from './live-preview/live-preview';
import { HookDisplay } from './hook-display/hook-display';

export const routes: Routes = [
  { path: '', component: Html },
  { path: 'preview', component: LivePreview },
  { path: 'hook-display', component: HookDisplay },
];
