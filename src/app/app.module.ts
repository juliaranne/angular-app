import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerOverview } from './player/player-overview/player-overview.component';
import { HomeComponent } from './home/home.component';
import { CreatePlayer } from './player/create-player/create-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerOverview,
    HomeComponent,
    CreatePlayer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
