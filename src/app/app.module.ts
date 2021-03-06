import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokecardsComponent } from './pokecards/pokecards.component';
import { CardComponent } from './pokecards/card/card.component';
import { PokecardsService } from './pokecards/pokecards.service';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { DetailComponent } from './pokedetails/detail/detail.component';
import { OrdenarNome } from './order.pipe';
import { Search } from './pokecards/search.pipe';
import { SearchComponent } from './pokecards/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    PokecardsComponent,
    CardComponent,
    PokedetailsComponent,
    DetailComponent,
    OrdenarNome,
    Search,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokecardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
