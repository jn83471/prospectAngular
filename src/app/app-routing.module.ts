import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePuestoComponent } from './admin/home/create-puesto/create-puesto.component';
import { HomeComponent } from './admin/home/home.component';
import { ProspectsComponent } from './admin/home/prospects/prospects.component';
import { PuestosComponent } from './admin/home/puestos/puestos.component';
import { ShowProspectsComponent } from './admin/home/show-prospects/show-prospects.component';
import { ShowpostulantesComponent } from './admin/home/showpostulantes/showpostulantes.component';
import { UsuariosComponent } from './admin/home/usuarios/usuarios.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth.guard';
import { IndexComponent } from './index/index.component';
import { RegisterUserComponent } from './invitade/register-user/register-user.component';
import { PostulantesComponent } from './postulantes/postulantes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {
  path:"login",component:LoginComponent
},
{path:'index',component:IndexComponent},
{
  path:'register',component:RegisterComponent
},
{
  path:'postulantes',component:PostulantesComponent
},
  {
    path:'home',component:HomeComponent,
    canActivate:[AuthGuard],
    children:[{
      path:'',component:ProspectsComponent
    },
    {
      path:'index',component:ProspectsComponent,
    },
    {
      path:'puestos',component:PuestosComponent,
    },
    {
      path:"usuarios",component:UsuariosComponent
    },
    {
      path:'prospects/:id',component:ShowpostulantesComponent
    },
    {
      path:'puestos/create',component:CreatePuestoComponent
    },
    {
      path:'puestos/create',component:ShowProspectsComponent
    }

  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
