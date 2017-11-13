import { NgModule } from '@angular/core';

import {ClassesRoutingModule} from './classes.routing';

import { ClassesComponent } from './classes.component';

@NgModule({
  imports: [
    ClassesRoutingModule
  ],
  declarations: [
    ClassesComponent
  ]
})

export class ClassesModule { }
