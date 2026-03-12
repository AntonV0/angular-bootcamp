import { Routes } from '@angular/router';
import { MainMenu } from './main-menu/main-menu';
import { AboutUs } from './about-us/about-us';
import { Services } from './services/services';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
  {path: '', component: MainMenu },
  {path: 'about-us', component: AboutUs },
  {path: 'services', component: Services },
  {path: 'contact-us', component: ContactUs },
];
