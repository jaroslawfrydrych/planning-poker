import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Cards, GameStates } from '@planning-poker/api-interfaces';
import { TakeUntilDestroy, untilDestroyed } from '@shared/decorators/take-until-destroy.decorator';
import { EnvironmentService } from '@shared/services/environment/environment.service';

import { GuestActions } from '../store/actions/guest.actions';
import { GuestState } from '../store/states/guest.state';
import ChooseCard = GuestActions.ChooseCard;
import GuestGameInit = GuestActions.GuestGameInit;
import GetGameState = GuestActions.GetGameState;
import RoomRemove = GuestActions.RemoveRoom;
import CloseRoom = GuestActions.CloseRoom;
import GetRoomRemove = GuestActions.GetRoomRemove;

@Component({
  selector: 'planning-poker-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
@TakeUntilDestroy()
export class GameComponent implements OnInit, OnDestroy {

  public cards: Cards[];
  @Select(GuestState.card) public readonly card$: Observable<Cards>;

  constructor(private router: Router,
              private actions$: Actions,
              private store: Store,
              private environmentService: EnvironmentService) {
  }

  public ngOnInit(): void {
    this.store.dispatch([
      new GuestGameInit(),
      new GetGameState(),
      new GetRoomRemove()
    ]);

    this.cards = this.store.selectSnapshot(GuestState.availableCards);

    this.actions$
      .pipe(
        ofActionSuccessful(RoomRemove),
        untilDestroyed(this)
      )
      .subscribe(() => this.navigateToLadingPage());
  }

  public ngOnDestroy(): void {
    this.store.dispatch(CloseRoom);
    this.navigateToLadingPage();
  }

  public onCardClick(card: Cards): void {
    if (this.store.selectSnapshot(GuestState.gameState) === GameStates.REVIEW) {
      return;
    }

    this.store.dispatch(new ChooseCard(card));
  }

  @HostListener('window:beforeunload')
  public beforeUnloadHandler() {
    if (this.environmentService.production) {
      return false;
    }
  }

  private navigateToLadingPage(): void {
    this.router.navigateByUrl('/');
  }
}
