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
  path: 'classes',
  loadChildren: './classes/classes.module#ClassesModule'
}, {
  path: 'places',
  loadChildren: './places/places.module#PlacesModule'
}, {
  path: 'godlore',
  loadChildren: './godlore/godlore.module#GodloreModule'
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
