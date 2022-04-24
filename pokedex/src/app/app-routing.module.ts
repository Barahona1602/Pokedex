import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'pokedex',
    component: Home2Component
  },
  {
    path: '',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
