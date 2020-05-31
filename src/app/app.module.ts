import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerOverview } from './player/player-overview/player-overview.component';
import { HomeComponent } from './home/home.component';
import { CreatePlayerComponent } from './player/create-player/create-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerOverview,
    HomeComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
