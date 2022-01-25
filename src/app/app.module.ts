import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http'; // <- HERE
import { AdminModule } from './admin/admin.module';
import { UrlPeticionsService } from './admin/url-peticions.service';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { PostulantesComponent } from './postulantes/postulantes.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    PostulantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    UrlPeticionsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
