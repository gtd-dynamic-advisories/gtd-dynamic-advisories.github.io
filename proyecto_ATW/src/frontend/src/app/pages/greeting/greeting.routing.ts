import { Routes } from '@angular/router';


// pages
import { AppGreetingComponent } from './app-greeting/app-greeting.component';
import { AppPersonasComponent } from './app-personas/app-personas.component';
import { AppAsesorComponent } from '../asesor/app-asesor.component';
import { AppPymeComponent } from '../pymes/app-pyme.component';
import { ApppymeAsesorComponent } from '../pymeAsesor/app-pymeAsesor.component';

export const GreetingRoutes: Routes = [
  {
    path: '',
    component: AppGreetingComponent,
  },
  {
    path: 'people',
    component: AppPersonasComponent,
  },
  {
    path:'asesores',
    component: AppAsesorComponent,
  },
  {
    path: 'pyme',
    component: AppPymeComponent
  },
  {
    path:'pyme-asesor',
    component: ApppymeAsesorComponent
  }
];
