import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home.component';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  }
];
