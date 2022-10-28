import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { ActiveComponent } from './admin/post/active/active.component';
import { PendingComponent } from './admin/post/pending/pending.component';
import { RejectedComponent } from './admin/post/rejected/rejected.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'/login', 
    pathMatch:'full'
  },

  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},

  {
    path:'admin/dashboard',
    component: AdminDashboardComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'active-post',
        component:ActiveComponent
      },
      {
        path:'pending-post',
        component:PendingComponent
      },
      {
        path:'rejected-post',
        component:RejectedComponent
      }
    ]
  },
  {
    path:'**', 
    redirectTo:'/login', 
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
