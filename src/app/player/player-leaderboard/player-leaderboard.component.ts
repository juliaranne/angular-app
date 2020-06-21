import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PlayerService } from '../../shared/player.service';
import { Player } from '../../shared/player.model';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs';
import { map, switchMap, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-player-leaderboard',
  templateUrl: './player-leaderboard.component.html',
  styleUrls: ['./player-leaderboard.component.scss']
})
export class PlayerLeaderBoard implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: any;
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  ngAfterViewInit() {
    console.log(this.searchInput);
    const name$:any = fromEvent(this.getNativeElement(this.searchInput), 'keyup')  
      .pipe(map((event: any) => event.target.value))
      .pipe(switchMap(term => this.playerService.search(term)))
      .subscribe(items => console.log(items, 'items'));
  }

  getNativeElement(element:any) {
    return element.nativeElement;
  }

  getPlayers() {
    this.playerService.all()
      .subscribe(players => this.players = players);
  }

}
