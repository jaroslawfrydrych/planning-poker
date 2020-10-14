import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, ClientType, GameStateBroadcastDto, GameStates, UserStatuses } from '@planning-poker/api-interfaces';
import { ButtonColor } from '@shared/button/button-color.enum';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HostService } from '../host.service';
import { BoardGuard } from './board.guard';

@Component({
  selector: 'planning-poker-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  public roomId: string;
  public users$: Observable<Client[]>;
  public userStatues = UserStatuses;
  public gameState$: Observable<GameStates>;
  public gameStates = GameStates;
  public buttonColors = ButtonColor;
  public reviewCardsSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentTime$: Observable<Date>;
  public leaveModalVisibility$: Observable<boolean>;
  private destroySubject$: Subject<null>;
  private leaveModalVisibilitySubject$: BehaviorSubject<boolean>;

  constructor(private hostService: HostService,
              private activatedRoute: ActivatedRoute,
              private $gaService: GoogleAnalyticsService,
              private boardGuard: BoardGuard) {
    this.destroySubject$ = new Subject<null>();
    this.leaveModalVisibilitySubject$ = new BehaviorSubject<boolean>(false);
    this.leaveModalVisibility$ = this.leaveModalVisibilitySubject$.asObservable();
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');

    this.roomId = this.hostService.hostRoom;
    this.hostService.joinRoom(this.roomId);

    this.users$ = this.hostService.getUsers()
      .pipe(
        map((users: Client[]) => {
          return users.filter((user: Client) => user.type === ClientType.VOTER);
        })
      );

    this.currentTime$ = this.hostService.currentTime();
    this.gameState$ = this.hostService.getGameState()
      .pipe(
        map((data: GameStateBroadcastDto) => data.state),
        tap((gameState: GameStates) => this.handleGameStateChange(gameState))
      );
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public get leaveModalVisibility(): boolean {
    return this.leaveModalVisibilitySubject$.getValue();
  }

  public set leaveModalVisibility(value: boolean) {
    this.leaveModalVisibilitySubject$.next(value);
  }

  public toggleGameState(): void {
    this.hostService.toggleGameState(this.roomId);
    this.$gaService.event('toggle_game_state', 'host', 'Toggle game state');
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

  private handleGameStateChange(gameState: GameStates): void {
    this.reviewCardsSubject$.next(gameState === GameStates.REVIEW);
  }
}
