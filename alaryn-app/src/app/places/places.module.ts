import { NgModule } from '@angular/core';

import {PlacesRoutingModule} from './places.routing';

import { PlacesComponent } from './places.component';

@NgModule({
  imports: [
    PlacesRoutingModule
  ],
  declarations: [
    PlacesComponent
  ]
})

export class PlacesModule { }
