import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { GameStates, Player, UserStatuses } from '@planning-poker/api-interfaces';
import { ButtonColor } from '@shared/button/button-color.enum';
import { EnvironmentService } from '@shared/services/environment.service';

import { HostService } from '../host.service';
import { HostActions } from '../store/actions/host.actions';
import { HostState } from '../store/states/host.state';
import { BoardGuard } from './board.guard';
import ToggleGameState = HostActions.ToggleGameState;

@Component({
  selector: 'planning-poker-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  @ViewChild('roomLinkInput') public roomLinkInput: ElementRef;
  @Select(HostState.gameState) public gameState$: Observable<GameStates>;
  @Select(HostState.roomNumber) public roomNumber$: Observable<string>;
  @Select(HostState.users) public users$: Observable<Player[]>;
  public userStatues = UserStatuses;
  public gameStates = GameStates;
  public buttonColors = ButtonColor;
  public currentTime$: Observable<Date>;
  public leaveModalVisibility$: Observable<boolean>;
  public linkCopied$: Observable<boolean>;
  private destroySubject$: Subject<null>;
  private leaveModalVisibilitySubject$: BehaviorSubject<boolean>;
  private linkCopiedSubject$: BehaviorSubject<boolean>;

  constructor(private hostService: HostService,
              private activatedRoute: ActivatedRoute,
              private $gaService: GoogleAnalyticsService,
              private boardGuard: BoardGuard,
              private router: Router,
              private environmentService: EnvironmentService,
              private store: Store) {
    this.destroySubject$ = new Subject<null>();
    this.leaveModalVisibilitySubject$ = new BehaviorSubject<boolean>(false);
    this.leaveModalVisibility$ = this.leaveModalVisibilitySubject$.asObservable();
    this.linkCopiedSubject$ = new BehaviorSubject<boolean>(false);
    this.linkCopied$ = this.linkCopiedSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');
    this.hostService.listenToSocketEvents();

    this.hostService.joinSocketRoom();

    this.currentTime$ = this.hostService.currentTime();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
    this.hostService.closeSocketEvents();
  }

  @HostListener('window:beforeunload')
  public beforeUnloadHandler(event) {
    if (this.environmentService.production) {
      return false;
    }
  }

  public set leaveModalVisibility(value: boolean) {
    this.leaveModalVisibilitySubject$.next(value);
  }

  public get roomLink$(): Observable<string> {
    return this.roomNumber$
      .pipe(
        map((roomNumber: string) => {
          return window.location.origin + '/guest/room-code?code=' + roomNumber;
        })
      );
  }

  public toggleGameState(): void {
    this.$gaService.event('toggle_game_state', 'host', 'Toggle game state');
    this.store.dispatch(new ToggleGameState());
  }

  public getRoomLink(): void {
    this.roomLinkInput.nativeElement.select();
    this.roomLinkInput.nativeElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
    this.roomLinkInput.nativeElement.blur();
    this.linkCopiedSubject$.next(true);

    setTimeout(() => {
      this.linkCopiedSubject$.next(false);
    }, 2000);
  }

  public closeRoom() {
    this.router.navigateByUrl('/');
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
}
