import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { Cards, GameStates, Player } from '@planning-poker/api-interfaces';
import { TakeUntilDestroy, untilDestroyed } from '@shared/decorators/take-until-destroy.decorator';
import { EnvironmentService } from '@shared/services/environment/environment.service';

import { AppService } from '../../../app.service';
import { GuestService } from '../guest.service';
import { GuestActions } from '../store/actions/guest.actions';
import { GuestState } from '../store/states/guest.state';
import ChooseCard = GuestActions.ChooseCard;
import GuestGameInit = GuestActions.GuestGameInit;
import GetGameState = GuestActions.GetGameState;
import RoomRemove = GuestActions.RemoveRoom;
import LeaveRoom = GuestActions.LeaveRoom;
import GetRoomRemove = GuestActions.GetRoomRemove;
import GetPlayersResults = GuestActions.GetPlayersResults;

@Component({
  selector: 'planning-poker-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
@TakeUntilDestroy()
export class GameComponent implements OnInit, OnDestroy {

  public cards: Cards[];
  @Select(GuestState.card) public readonly card$: Observable<Cards>;
  @Select(GuestState.roomNumber) public readonly roomNumber$: Observable<string>;
  @Select(GuestState.gameState) public readonly gameState$: Observable<GameStates>;
  @Select(GuestState.players) public readonly players$: Observable<Player[]>;

  constructor(private router: Router,
              private guestService: GuestService,
              private actions$: Actions,
              private store: Store,
              private appService: AppService,
              private environmentService: EnvironmentService) {
  }

  public get isInReview$(): Observable<boolean> {
    return this.gameState$
      .pipe(
        map((gameState: GameStates) => gameState === GameStates.REVIEW)
      );
  }

  public ngOnInit(): void {
    this.store.dispatch([
      new GuestGameInit(),
      new GetGameState(),
      new GetRoomRemove(),
      new GetPlayersResults()
    ]);

    this.cards = this.store.selectSnapshot(GuestState.availableCards);

    this.actions$
      .pipe(
        ofActionSuccessful(RoomRemove),
        untilDestroyed(this)
      )
      .subscribe(() => this.navigateToLadingPage());

    this.handleSocketEvents();
  }

  public ngOnDestroy(): void {
    this.store.dispatch(LeaveRoom);
    this.navigateToLadingPage();
  }

  public onCardClick(card: Cards): void {
    if (this.store.selectSnapshot(GuestState.gameState) === GameStates.REVIEW) {
      return;
    }

    this.store.dispatch(new ChooseCard(card));
  }

  public isCardSelected(cardItem: Cards): Observable<boolean> {
    return this.card$
      .pipe(
        map((card: Cards) => card === cardItem)
      );
  }

  public isCardNotSelected(cardItem: Cards): Observable<boolean> {
    return this.card$
      .pipe(
        map((card: Cards) => !isNullOrUndefined(card) && card !== cardItem)
      );
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

  private handleSocketEvents(): void {
    this.appService.reconnectFailed$()
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(() => this.navigateToLadingPage());

    this.appService.connect$()
      .pipe(
        mergeMap(() => this.roomNumber$),
        take(1),
        mergeMap((roomNumber: string) => this.guestService.getIsPlayerInRoom(roomNumber)),
        filter((isPlayerInRoom: boolean) => !isPlayerInRoom),
        untilDestroyed(this)
      )
      .subscribe(() => this.navigateToLadingPage());
  }
}
