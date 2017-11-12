import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
    path: 'history',
    loadChildren: './history/history.module#HistoryModule'
  }, {
    path: '',
    component: HomeComponent
  }, {
  path: 'races',
  loadChildren: './races/races.module#RacesModule'
}, {
  path: 'mechanics',
  loadChildren: './mechanics/mechanics.module#MechanicsModule'
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
