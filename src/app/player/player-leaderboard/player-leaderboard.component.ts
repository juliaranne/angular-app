import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Player } from '../../shared/player.model';

@Component({
  selector: 'app-player-leaderboard',
  templateUrl: './player-leaderboard.component.html',
  styleUrls: ['./player-leaderboard.component.scss']
})
export class PlayerLeaderBoard implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.all()
      .subscribe(players => this.players = players);
  }

}
