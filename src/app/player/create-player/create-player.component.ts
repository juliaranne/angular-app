import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Player } from '../../shared/player.model';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayer {
  @ViewChild('submitButton') submitButton: any;
  player: Player = {name: '', id: 0, score: 0, display_name: '' }
  players: Player[] = [];
  
  constructor(private playerService: PlayerService) {
  }

  getNativeElement(element:any) {
    return element.nativeElement;
  }

  onSubmit(formData: {name: string}) {
    this.player.name = formData.name.toLowerCase();
    this.player.display_name = formData.name;
    this.getPlayerId();
  }

  getPlayerId() {
    this.playerService.getId()
      .subscribe(id => {
        this.player.id = id
        this.createPlayer();
      });
  }

  createPlayer() {
    this.playerService.create(this.player)
      .subscribe(players => {
        this.players = players
      });
  }
}
