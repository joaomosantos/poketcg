import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokecardsComponent } from './pokecards/pokecards.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';

const routes: Routes = [
  { path: '', component: PokecardsComponent },
  { path: 'detail/:id', component: PokedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
