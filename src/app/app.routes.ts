import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'Saissie',
        loadComponent: () => import('./Saisie/saisie/saisie.component').then(m => m.SaisieComponent)
    
       }
];
