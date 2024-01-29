import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ControlComponent } from './pages/control/control.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'control', component: ControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
