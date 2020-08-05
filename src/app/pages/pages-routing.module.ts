import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { LoginComponent } from "./login/login.component";
// import { RegisterComponent } from "./register/register.component";
// import { AuthGuard } from "../shared/index";
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//     {
//       path: '',
//       canActivate: [AuthGuard],
//       component: HomeComponent,
//       data: { title: 'Pikchat admin dashboard'}
//     },
//     {
//         path: 'auth',
//         children: [
//           { 
//             path: 'login', 
//             component: LoginComponent,
//             data: { title: 'Admin Login'} 
//           },
//           {
//             path: 'register',
//             component: RegisterComponent,
//             data: { title: 'Register'},
//           },
//         ],
//     },
//     { path: '**', redirectTo: '' },
// ];

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
