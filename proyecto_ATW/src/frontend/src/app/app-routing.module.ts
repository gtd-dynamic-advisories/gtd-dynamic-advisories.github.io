import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'greeting',
        loadChildren: () =>
          import('./pages/greeting/greeting.module').then((m) => m.GreetingModule),
      },
      {
        path: 'asesor',
        loadChildren: () =>
          import('./pages/asesor/app-asesor.component').then((m) => m.AppAsesorComponent)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
