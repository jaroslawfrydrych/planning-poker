import { Component, ComponentRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { interval, Observable } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { Cards, GameStates, Player } from '@planning-poker/api-interfaces';
import { ModalConfig, ModalService } from '@planning-poker/modal';
import { ModalCommonComponent } from '@planning-poker/modal';
import { ConnectionStatus, TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { EnvironmentService } from '@shared/services/environment/environment.service';
import { SocketState } from '@store/states/socket.state';

import { AppService } from '../../../app.service';
import { GuestService } from '../guest.service';
import { GuestActions } from '../store/actions/guest.actions';
import { GuestState } from '../store/states/guest.state';
import { ModalGameResultsConfig } from './modal-game-results-review/modal-game-results-config';
import { ModalGameResultsReviewComponent } from './modal-game-results-review/modal-game-results-review.component';
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
  @Select(SocketState.connectionStatus) public readonly connectionStatus$: Observable<ConnectionStatus>;
  private resultsModal: ComponentRef<ModalCommonComponent<ModalGameResultsReviewComponent, ModalGameResultsConfig>>;

  constructor(private router: Router,
              private guestService: GuestService,
              private actions$: Actions,
              private store: Store,
              private appService: AppService,
              private environmentService: EnvironmentService,
              private modalService: ModalService) {
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
    this.handleIntervalPlayerCheck();
    this.handleGameStateChange();
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
    this.appService.reconnectFailed$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(() => this.navigateToLadingPage());

    this.appService.connect$
      .pipe(
        mergeMap(() => this.roomNumber$),
        take(1),
        mergeMap((roomNumber: string) => this.guestService.getIsPlayerInRoom(roomNumber)),
        filter((isPlayerInRoom: boolean) => !isPlayerInRoom),
        untilDestroyed(this)
      )
      .subscribe(() => this.navigateToLadingPage());
  }

  /**
   * Helper function to get data from api check-host-of-room/:playerId/:roomNumber
   * @param roomNumber
   */
  private getIfIsStillPlayerInRoom(roomNumber: string): Observable<boolean> {
    return this.guestService.getIsPlayerInRoom(roomNumber)
      .pipe(
        filter((isPlayerInRoom: boolean) => !isPlayerInRoom)
      );
  }

  /**
   * Check every 30 seconds on api check-host-of-room/:playerId/:roomNumber is client still host of room.
   */
  private handleIntervalPlayerCheck(): void {
    interval(30000)
      .pipe(
        mergeMap(() => this.connectionStatus$
          .pipe(take(1))
        ),
        filter((connectionStatus: ConnectionStatus) => connectionStatus === ConnectionStatus.CONNECTED),
        mergeMap(() => this.roomNumber$
          .pipe(take(1))
        ),
        mergeMap((roomNumber: string) => this.getIfIsStillPlayerInRoom(roomNumber)),
        untilDestroyed(this)
      )
      .subscribe(() => this.handleConnectionFailed());
  }

  private handleConnectionFailed(): void {
    this.router.navigateByUrl('/?reconnectFailed=true');
    this.modalService.alert('Connection error!').subscribe();
  }

  private handleGameStateChange(): void {
    this.gameState$
      .pipe(
        map((gameState: GameStates) => gameState === GameStates.REVIEW),
        untilDestroyed(this)
      )
      .subscribe((result: boolean) => {
        if (result) {

          const resultsModalConfig: ModalConfig<ModalGameResultsConfig> = {
            disableClose: true,
            wrapperClassName: 'game-results-modal-wrapper',
            containerClassName: 'game-results-modal-container',
            data: {
              players$: this.players$,
              gameState$: this.gameState$,
              cardsInRow: 7
            }
          };

          this.resultsModal = this.modalService
            .open<ModalGameResultsReviewComponent, ModalGameResultsConfig>(ModalGameResultsReviewComponent, resultsModalConfig);
        } else if (this.resultsModal) {
          this.resultsModal.instance.closeModal();
        }
      });
  }
}
