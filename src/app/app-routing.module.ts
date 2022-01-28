import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { SigmupComponent } from './sigmup/sigmup.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'signup', component: SigmupComponent},
  {path: 'home', component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
