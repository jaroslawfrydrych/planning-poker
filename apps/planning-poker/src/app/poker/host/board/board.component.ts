import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { map, startWith, take, takeUntil } from 'rxjs/operators';

import { GameStates, Player, PlayerStatuses } from '@planning-poker/api-interfaces';
import { ButtonColor } from '@shared/button/button-color.enum';
import { EnvironmentService } from '@shared/services/environment.service';

import { HostActions } from '../store/actions/host.actions';
import { HostState } from '../store/states/host.state';
import { BoardGuard } from './board.guard';
import CloseRoom = HostActions.CloseRoom;
import GetGameState = HostActions.GetGameState;
import GetUsers = HostActions.GetPlayers;
import JoinRoom = HostActions.JoinRoom;
import ToggleGameState = HostActions.ToggleGameState;

@Component({
  selector: 'planning-poker-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  public currentTime$: Observable<Date>;
  public leaveModalVisibility$: Observable<boolean>;
  public linkCopied$: Observable<boolean>;
  @Select(HostState.gameState) public readonly gameState$: Observable<GameStates>;
  @Select(HostState.roomNumber) public readonly roomNumber$: Observable<string>;
  @Select(HostState.players) public readonly players$: Observable<Player[]>;
  public readonly gameStates = GameStates;
  public readonly userStatues = PlayerStatuses;
  public readonly buttonColors = ButtonColor;

  private leaveModalVisibilitySubject$: BehaviorSubject<boolean>;
  private linkCopiedSubject$: BehaviorSubject<boolean>;
  private readonly destroySubject$: Subject<null>;

  constructor(private activatedRoute: ActivatedRoute,
              private $gaService: GoogleAnalyticsService,
              private boardGuard: BoardGuard,
              private router: Router,
              private environmentService: EnvironmentService,
              private renderer: Renderer2,
              private store: Store) {
    this.destroySubject$ = new Subject<null>();
    this.leaveModalVisibilitySubject$ = new BehaviorSubject<boolean>(false);
    this.leaveModalVisibility$ = this.leaveModalVisibilitySubject$.asObservable();
    this.linkCopiedSubject$ = new BehaviorSubject<boolean>(false);
    this.linkCopied$ = this.linkCopiedSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.dispatchOnInitActions();
    this.$gaService.pageView('/host/board');
    this.currentTime$ = this.getCurrentTime$();
  }

  public ngOnDestroy(): void {
    this.dispatchOnDestroyActions();
    this.destroySubject$.next(null);
  }

  public toggleGameState(): void {
    this.$gaService.event('toggle_game_state', 'host', 'Toggle game state');
    this.store.dispatch(new ToggleGameState());
  }

  public closeRoom() {
    this.router.navigateByUrl('/');
  }

  public set leaveModalVisibility(value: boolean) {
    this.leaveModalVisibilitySubject$.next(value);
  }

  public get roomLink$(): Observable<string> {
    return this.roomNumber$
      .pipe(
        map((roomNumber: string) => {
          return window.location.origin + '/guest/room-code?code=' + roomNumber;
        }),
        take(1),
        takeUntil(this.destroySubject$)
      );
  }

  public async copyToClipboardRoomLink(): Promise<void> {
    const input: HTMLInputElement = this.renderer.createElement('input');

    this.renderer.setStyle(input, 'opacity', 0);
    this.renderer.setStyle(input, 'text-indent', '-9999px');
    this.renderer.appendChild(document.body, input);

    input.value = await this.roomLink$.toPromise();
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    input.blur();
    input.remove();

    this.linkCopiedSubject$.next(true);

    setTimeout(() => {
      this.linkCopiedSubject$.next(false);
    }, 2000);
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

  @HostListener('window:beforeunload')
  public beforeUnloadHandler() {
    if (this.environmentService.production) {
      return false;
    }
  }

  private dispatchOnInitActions(): void {
    this.store.dispatch([
      new JoinRoom(),
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
