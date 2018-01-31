import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';

export const routes:Routes=[
    {
        path: '' ,
        component : DashboardComponent,


    }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes)