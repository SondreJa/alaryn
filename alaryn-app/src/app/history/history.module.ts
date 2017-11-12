import { NgModule } from '@angular/core';

import { HistoryRoutingModule } from './history.routing';

import { HistoryComponent } from './history.component';

@NgModule({
  imports: [
    HistoryRoutingModule
  ],
  declarations: [
    HistoryComponent
  ]
})

export class HistoryModule { }
