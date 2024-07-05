import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppAsesorComponent } from './pages/asesor/app-asesor.component';
import { AppPymeComponent } from './pages/pymes/app-pyme.component';
import { AppPymeAsesorComponent } from './pages/pymeAsesor/app-pymeAsesor.component';
import { AppCreateAsesorComponent } from './pages/asesor/app-create-asesor.component';
import { AppUpdateAsesor } from './pages/asesor/app-update-asesor.component';
import { AppCreatePymeComponent } from './pages/pymes/app-create-pyme.component';
import { AppCreatePymeAsesorComponent } from './pages/pymeAsesor/app-create-pymeasesor.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Asesors',
        pathMatch: 'full',
      },
      {
        path:'Asesors',
        component: AppAsesorComponent,
      },
      {
        path: 'Pymes',
        component: AppPymeComponent
      },
      {
        path:'Pyme_Asesors',
        component: AppPymeAsesorComponent
      },
      {
        path: 'Asesors/new',
        component: AppCreateAsesorComponent
      },
      {
        path: 'Pymes/new',
        component: AppCreatePymeComponent
      },
      {
        path: 'Pyme_Asesors/new',
        component: AppCreatePymeAsesorComponent
      },
      {
        path: 'Asesors/:id',
        component: AppUpdateAsesor
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
