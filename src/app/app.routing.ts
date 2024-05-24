import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexUsuarioComponent } from './components/usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './components/usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { LoginComponent } from './components/login/login.component';

import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { IndexClientesComponent } from './components/clientes/index-clientes/index-clientes.component';
import { IndexOrdenComponent } from './components/clientes/ordenes/index-orden.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'colaborador', component: IndexUsuarioComponent },
  { path: 'colaborador/create', component: CreateUsuarioComponent },
  { path: 'colaborador/edit/:id', component: EditUsuarioComponent },

  { path: 'producto', component: IndexProductoComponent },
  { path: 'producto/create', component: CreateProductoComponent },
  { path: 'producto/edit/:id', component: EditProductoComponent },

  { path: 'clientes', component: IndexClientesComponent },

  { path: 'ordenes', component: IndexOrdenComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
