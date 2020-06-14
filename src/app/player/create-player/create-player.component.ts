import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Player } from '../../shared/player.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayer implements OnInit {
  @ViewChild('inputRef') inputRef: string = '';
  player: Player = {name: '', id: 0, score: 0 }
  players: Player[] = [];
  
  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    const name$ = Observable.fromEvent(this.getNativeElement(this.inputRef), 'keyup')
      .debounceTime(200)
      .distinctUntilChanged()
      .map((event: any) => event.target.value)
      .switchMap(term => this.itemsService.search(term))
      .subscribe(items => this.onResults.emit(items));
  }

  onSubmit(formData: {name: string}) {
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
