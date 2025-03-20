import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => {
      return import('./login/login.component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'home',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'students',
    loadComponent: () => {
      return import('./students/students.component').then(
        (m) => m.StudentsComponent
      );
    },
  },
  {
    path: 'student/:id',
    loadComponent: () => {
      return import('./report-card/report-card.component').then(
        (m) => m.ReportCardComponent
      );
    },
  },
  {
    path: 'schedule/:id',
    loadComponent: () => {
      return import('./calendar-page/calendar-page.component').then(
        (m) => m.CalendarPageComponent
      );
    },
  },
  {
    path: 'manage',
    redirectTo: 'professionals',
    pathMatch: 'full'
  },
  {
    path: 'analitics',
    loadComponent: () => {
      return import('./analitics/analitics.component').then(
        (m) => m.AnaliticsComponent
      );
    },
  },
  {
    path: 'professionals',
    loadComponent: () => {
      return import('./professionals/professionals.component').then(
        (m) => m.ProfessionalsComponent
      );
    },
  },
];
