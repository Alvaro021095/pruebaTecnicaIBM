import { PrincipalComponent } from './principal/principal.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';

import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'formulario-compra', component: FormularioCompraComponent },
	{ path: 'principal', component: PrincipalComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const app_routing = RouterModule.forRoot(appRoutes);
