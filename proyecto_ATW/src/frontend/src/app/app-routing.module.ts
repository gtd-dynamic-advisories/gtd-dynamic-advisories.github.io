import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppAsesorComponent } from './pages/asesor/app-asesor.component';
import { AppPymeComponent } from './pages/pymes/app-pyme.component';
import { ApppymeAsesorComponent } from './pages/pymeAsesor/app-pymeAsesor.component';
import { AppCreateAsesorComponent } from './pages/asesor/app-create-asesor.component';

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
        component: ApppymeAsesorComponent
      },
      {
        path: 'Asesors/new',
        component: AppCreateAsesorComponent
      },
      // {
      //   path: 'Asesors/:id',
      //   component:
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
