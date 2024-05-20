import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { routing } from './app.routing';
import { IndexUsuarioComponent } from './components/usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './components/usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    IndexUsuarioComponent,
    CreateUsuarioComponent,
    EditUsuarioComponent,
    LoginComponent,
    DashboardComponent,
    IndexProductoComponent,
    CreateProductoComponent,
    EditProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
