import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HomeComponent,
    HeroesComponent,
    HeroeComponent,
    AboutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
