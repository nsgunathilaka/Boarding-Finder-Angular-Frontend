import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { PendingComponent } from './admin/post/pending/pending.component';
import { RejectedComponent } from './admin/post/rejected/rejected.component';
import { ActiveComponent } from './admin/post/active/active.component';
import { FacilityComponent } from './admin/post/facility/facility.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './admin/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminSidenavComponent,
    AdminHeaderComponent,
    PendingComponent,
    RejectedComponent,
    ActiveComponent,
    FacilityComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
