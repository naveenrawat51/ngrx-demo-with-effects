import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path:  '', component:  LoginComponent},
  { path:  'profile-list', component:  ProfileListComponent},
  { path:  'profile-details/:id', component:  ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
