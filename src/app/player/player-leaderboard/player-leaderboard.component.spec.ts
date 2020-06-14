import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLeaderBoard } from './player-leaderboard.component';
import { PlayerService } from '../../shared/player.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class PlayerServiceStub {
  all() {
    return Observable.of([{
      "id": 2,
      "name": "Player 2",
      "score": 58
    }])
  }
}

describe('PlayerLeaderBoard', () => {
  let component: PlayerLeaderBoard;
  let fixture: ComponentFixture<PlayerLeaderBoard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLeaderBoard ],
      providers: [{provide: PlayerService, useClass: PlayerServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLeaderBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of player names', () => {
    const player = fixture.debugElement.nativeElement.querySelector('li');
    expect(player.textContent).toContain('Player 2');
  });
});
