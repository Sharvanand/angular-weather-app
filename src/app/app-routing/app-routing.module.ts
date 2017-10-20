import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CurrentComponent } from '../current/current.component';
import { ForecastComponent } from '../forecast/forecast.component';

const routes:Routes = [
  {path:'', redirectTo:'/current', pathMatch:'full'},
  {path:'current',component:CurrentComponent},
  {path:'forecast', component:ForecastComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
