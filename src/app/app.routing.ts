import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexUsuarioComponent } from "./components/usuarios/index-usuario/index-usuario.component";
import { CreateUsuarioComponent } from "./components/usuarios/create-usuario/create-usuario.component";
import { EditUsuarioComponent } from "./components/usuarios/edit-usuario/edit-usuario.component";
import { LoginComponent } from "./components/login/login.component";

const appRoutes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'colaborador', component: IndexUsuarioComponent},
  { path: 'colaborador/create', component: CreateUsuarioComponent },
  { path: 'colaborador/edit/:id', component: EditUsuarioComponent }
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);