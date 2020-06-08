import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLeaderBoard } from './player-leaderboard.component';

describe('PlayerLeaderBoard', () => {
  let component: PlayerLeaderBoard;
  let fixture: ComponentFixture<PlayerLeaderBoard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLeaderBoard ]
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
});
