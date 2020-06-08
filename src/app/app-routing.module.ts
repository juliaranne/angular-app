import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerOverview } from './player/player-overview/player-overview.component';
import { PlayerLeaderBoard } from './player/player-leaderboard/player-leaderboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'players', component: PlayerOverview},
  {path: 'leaderboard', component: PlayerLeaderBoard },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
