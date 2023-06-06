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
      import('./page.template/page.template').then((m) => m.PageTemplate),
  }

];
