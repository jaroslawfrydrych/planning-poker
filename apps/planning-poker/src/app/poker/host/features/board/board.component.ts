import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { debounceTime, filter, flatMap, map, mergeMap, startWith, take } from 'rxjs/operators';

import { GameStates, Player, PlayerStatuses } from '@planning-poker/api-interfaces';
import { ModalService } from '@planning-poker/modal';
import { ButtonColor } from '@planning-poker/ui';
import { ConnectionStatus, TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { CopyToClipboardService } from '@shared/services/copy-to-clipboard/copy-to-clipboard.service';
import { EnvironmentService } from '@shared/services/environment/environment.service';
import { SocketState } from '@store/states/socket.state';

import { AppService } from '../../../../app.service';
import { HostService } from '../../host.service';
import { HostActions } from '../../store/actions/host.actions';
import { HostState } from '../../store/states/host.state';
import { BoardGuard } from './board.guard';
import CloseRoom = HostActions.CloseRoom;
import GetGameState = HostActions.GetGameState;
import GetPlayers = HostActions.GetPlayers;
import ToggleGameState = HostActions.ToggleGameState;
import HostBoardInit = HostActions.HostBoardInit;
import CopyRoomLink = HostActions.CopyRoomLink;
import GetPlayerStatus = HostActions.GetPlayerStatus;
import GetResults = HostActions.GetResults;

@Component({
  selector: 'planning-poker-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
@TakeUntilDestroy()
export class BoardComponent implements OnInit, OnDestroy {

  public currentTime$: Observable<Date>;
  public linkCopied$: Observable<boolean>;
  @Select(HostState.gameState) public readonly gameState$: Observable<GameStates>;
  @Select(HostState.roomNumber) public readonly roomNumber$: Observable<string>;
  @Select(HostState.players) public readonly players$: Observable<Player[]>;
  @Select(SocketState.connectionStatus) public readonly connectionStatus$: Observable<ConnectionStatus>;
  public readonly gameStates = GameStates;
  public readonly buttonColors = ButtonColor;
  private linkCopiedSubject$: BehaviorSubject<boolean>;

  constructor(private boardGuard: BoardGuard,
              private hostService: HostService,
              private appService: AppService,
              private router: Router,
              private environmentService: EnvironmentService,
              private copyToClipboardService: CopyToClipboardService,
              private store: Store,
              private modalService: ModalService) {
    this.linkCopiedSubject$ = new BehaviorSubject<boolean>(false);
    this.linkCopied$ = this.linkCopiedSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.dispatchOnInitActions();
    this.store.dispatch(new HostBoardInit());
    this.currentTime$ = this.getCurrentTime$();
    this.handleSocketEvents();
    this.handleIntervalHostCheck();
  }

  public ngOnDestroy(): void {
    this.dispatchOnDestroyActions();
  }

  public toggleGameState(): void {
    this.store.dispatch(new ToggleGameState());
  }

  public closeRoom() {
    this.router.navigateByUrl('/');
  }

  public get roomLink(): string {
    const roomNumber: string = this.store.selectSnapshot(HostState.roomNumber);
    return window.location.origin + '/guest/room-code?code=' + roomNumber;
  }

  public copyToClipboardRoomLink(): void {
    this.store.dispatch(new CopyRoomLink());
    this.copyToClipboardService.copyText(this.roomLink);
    this.linkCopiedSubject$.next(true);

    this.linkCopied$
      .pipe(
        debounceTime(2000),
        filter((value: boolean) => value),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.linkCopiedSubject$.next(false);
      });
  }

  public isPlayerReady(player: Player): boolean {
    return player.status === PlayerStatuses.VOTED;
  }

  @HostListener('window:beforeunload')
  public beforeUnloadHandler() {
    if (this.environmentService.production) {
      return false;
    }
  }

  public getCardsInRow$(): Observable<number> {
    return this.players$
      .pipe(
        map((players: Player[]) => players ? players.length : 0),
        map((playersCount: number) => {
          if (playersCount <= 10) {
            return 5;
          } else if (playersCount <= 14) {
            return Math.ceil(playersCount / 2);
          } else {
            return 7;
          }
        })
      );
  }

  private dispatchOnInitActions(): void {
    this.store.dispatch([
      new GetPlayers(),
      new GetResults(),
      new GetGameState(),
      new GetPlayerStatus()
    ]);
  }

  private dispatchOnDestroyActions(): void {
    this.store.dispatch(new CloseRoom());
  }

  private getCurrentTime$(): Observable<Date> {
    return interval(1000)
      .pipe(
        startWith(<Date>null),
        map(() => new Date())
      );
  }

  private handleSocketEvents(): void {
    this.appService.reconnectFailed$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.router.navigateByUrl('/?reconnectFailed=true');
      });

    this.appService.connect$
      .pipe(
        mergeMap(() => this.roomNumber$),
        take(1),
        mergeMap(() => this.getIfIsHostOfRoom()),
        untilDestroyed(this)
      )
      .subscribe(() => this.handleConnectionFailed());
  }

  /**
   * Helper function to get data from api check-host-of-room/:playerId/:roomNumber
   * @param roomNumber
   */
  private getIfIsHostOfRoom(): Observable<boolean> {
    return this.hostService.getIsHostOfRoom()
      .pipe(
        filter((isHostOfRoom: boolean) => !isHostOfRoom)
      );
  }

  /**
   * Check every 30 seconds on api check-host-of-room/:playerId/:roomNumber is client still host of room.
   */
  private handleIntervalHostCheck(): void {
    interval(30000)
      .pipe(
        mergeMap(() => this.connectionStatus$
          .pipe(take(1))
        ),
        filter((connectionStatus: ConnectionStatus) => connectionStatus === ConnectionStatus.CONNECTED),
        mergeMap(() => this.roomNumber$
          .pipe(take(1))
        ),
        mergeMap(() => this.getIfIsHostOfRoom()),
        untilDestroyed(this)
      )
      .subscribe(() => this.handleConnectionFailed());
  }

  private handleConnectionFailed(): void {
    this.router.navigateByUrl('/?reconnectFailed=true');
    this.modalService.alert('Connection error!').subscribe();
  }
}
