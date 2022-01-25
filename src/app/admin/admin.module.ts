import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProspectsComponent } from './home/prospects/prospects.component';
import { RouterModule } from '@angular/router';
import { UrlPeticionsService } from './url-peticions.service';
import { PuestosComponent } from './home/puestos/puestos.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { ShowpostulantesComponent } from './home/showpostulantes/showpostulantes.component';
import { ShowProspectsComponent } from './home/show-prospects/show-prospects.component';
import { CreatePuestoComponent } from './home/create-puesto/create-puesto.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProspectsComponent,
    PuestosComponent,
    UsuariosComponent,
    ShowpostulantesComponent,
    ShowProspectsComponent,
    CreatePuestoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    UrlPeticionsService
  ]
})
export class AdminModule { }
