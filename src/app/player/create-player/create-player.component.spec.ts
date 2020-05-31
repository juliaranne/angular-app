import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayer } from './create-player.component';

describe('CreatePlayer', () => {
  let component: CreatePlayer;
  let fixture: ComponentFixture<CreatePlayer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlayer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
