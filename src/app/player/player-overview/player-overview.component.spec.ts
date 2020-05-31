import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverview } from './player-overview.component';

describe('PlayerOverview', () => {
  let component: PlayerOverview;
  let fixture: ComponentFixture<PlayerOverview>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerOverview ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
