import { NgModule } from '@angular/core';

import {GodloreRoutingModule} from './godlore.routing';

import { GodloreComponent } from './godlore.component';

@NgModule({
  imports: [
    GodloreRoutingModule
  ],
  declarations: [
    GodloreComponent
  ]
})

export class GodloreModule { }
