import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PlayerOverview } from './player/player-overview/player-overview.component';
import { HomeComponent } from './home/home.component';
import { CreatePlayer } from './player/create-player/create-player.component';
import { PlayerLeaderBoard } from './player/player-leaderboard/player-leaderboard.component';
import { PlayerService } from './shared/player.service';
import { inputNameValidatorDirective } from './shared/name-input-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayerOverview,
    HomeComponent,
    CreatePlayer,
    PlayerLeaderBoard,
    inputNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
