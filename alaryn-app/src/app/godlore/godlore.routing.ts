import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodloreComponent } from './godlore.component';

const routes: Routes = [
  { path: '', component: GodloreComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class GodloreRoutingModule { }
