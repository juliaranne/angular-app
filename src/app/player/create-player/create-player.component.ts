import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Player } from '../../shared/player.model';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayer {
  @ViewChild('submitButton') submitButton: any;
  player: Player = {name: '', id: 0, score: 0 }
  players: Player[] = [];
  
  constructor(private playerService: PlayerService) {
  }

  getNativeElement(element:any) {
    return element.nativeElement;
  }

  onSubmit(formData: {name: string}) {
    this.playerService.checkIfNameExists(name);
    this.player.name = formData.name;
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
