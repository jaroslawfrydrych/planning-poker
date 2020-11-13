import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { debounceTime, filter, map, startWith } from 'rxjs/operators';

import { GameStates, Player, PlayerStatuses } from '@planning-poker/api-interfaces';
import { ButtonColor } from '@shared/button/button-color.enum';
import { TakeUntilDestroy, untilDestroyed } from '@shared/decorators/take-until-destroy.decorator';
import { CopyToClipboardService } from '@shared/services/copy-to-clipboard/copy-to-clipboard.service';
import { EnvironmentService } from '@shared/services/environment/environment.service';

import { HostActions } from '../store/actions/host.actions';
import { HostState } from '../store/states/host.state';
import { BoardGuard } from './board.guard';
import CloseRoom = HostActions.CloseRoom;
import GetGameState = HostActions.GetGameState;
import GetUsers = HostActions.GetPlayers;
import ToggleGameState = HostActions.ToggleGameState;
import HostBoardInit = HostActions.HostBoardInit;
import CopyRoomLink = HostActions.CopyRoomLink;

@Component({
  selector: 'planning-poker-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
@TakeUntilDestroy()
export class BoardComponent implements OnInit, OnDestroy {

  public currentTime$: Observable<Date>;
  public leaveModalVisibility$: Observable<boolean>;
  public linkCopied$: Observable<boolean>;
  @Select(HostState.gameState) public readonly gameState$: Observable<GameStates>;
  @Select(HostState.roomNumber) public readonly roomNumber$: Observable<string>;
  @Select(HostState.players) public readonly players$: Observable<Player[]>;
  public readonly gameStates = GameStates;
  public readonly buttonColors = ButtonColor;
  private leaveModalVisibilitySubject$: BehaviorSubject<boolean>;
  private linkCopiedSubject$: BehaviorSubject<boolean>;

  constructor(private boardGuard: BoardGuard,
              private router: Router,
              private environmentService: EnvironmentService,
              private copyToClipboardService: CopyToClipboardService,
              private store: Store) {
    this.leaveModalVisibilitySubject$ = new BehaviorSubject<boolean>(false);
    this.leaveModalVisibility$ = this.leaveModalVisibilitySubject$.asObservable();
    this.linkCopiedSubject$ = new BehaviorSubject<boolean>(false);
    this.linkCopied$ = this.linkCopiedSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.dispatchOnInitActions();
    this.store.dispatch(new HostBoardInit());
    this.currentTime$ = this.getCurrentTime$();
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

  public set leaveModalVisibility(value: boolean) {
    this.leaveModalVisibilitySubject$.next(value);
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

  public showLeaveModal(): void {
    this.leaveModalVisibility = true;
  }

  public closeLeaveModal(): void {
    this.leaveModalVisibility = false;
  }

  public leaveModalAction(result: boolean): void {
    if (result) {
      this.boardGuard.discard();
    } else {
      this.boardGuard.keep();
    }

    this.closeLeaveModal();
  }

  public isPlayerReady(player: Player): boolean {
    return player.status === PlayerStatuses.VOTED
  }

  @HostListener('window:beforeunload')
  public beforeUnloadHandler() {
    if (this.environmentService.production) {
      return false;
    }
  }

  private dispatchOnInitActions(): void {
    this.store.dispatch([
      new GetUsers(),
      new GetGameState()
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
}
