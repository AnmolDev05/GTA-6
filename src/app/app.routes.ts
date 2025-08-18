import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/hero-section/hero-section').then((m) => m.HeroSection)
    },
];
