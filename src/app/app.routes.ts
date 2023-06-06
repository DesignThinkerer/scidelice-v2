import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./folder/page.template').then((m) => m.PageTemplate),
  }
];
