import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokecardsComponent } from './pokecards/pokecards.component';
import { CardComponent } from './pokecards/card/card.component';
import { PokecardsService } from './pokecards/pokecards.service';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { DetailComponent } from './pokedetails/detail/detail.component';
import { OrdenarNome } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokecardsComponent,
    CardComponent,
    PokedetailsComponent,
    DetailComponent,
    OrdenarNome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokecardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
