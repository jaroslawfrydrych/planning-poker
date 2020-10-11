import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Client,
  ClientType,
  GameStateBroadcastDto,
  GameStates,
  RoomInfoInterface,
  UserStatuses, Voted
} from '@planning-poker/api-interfaces';
import { ButtonColor } from '@shared/button/button-color.enum';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { HostService } from '../host.service';

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
  private onDestroySubject: Subject<null> = new Subject<null>();

  constructor(private hostService: HostService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    const resolverData: RoomInfoInterface = this.activatedRoute.snapshot.data.data;
    this.roomId = resolverData.id;

    this.users$ = this.hostService.getUsers()
      .pipe(
        map((users: Client[]) => {
          return users.filter((user: Client) => user.room === this.roomId && user.type === ClientType.VOTER);
        })
      );

    this.currentTime$ = this.hostService.currentTime();
    this.gameState$ = this.hostService.getGameState()
      .pipe(
        filter((data: GameStateBroadcastDto) => data.room === this.roomId),
        map((data: GameStateBroadcastDto) => data.state),
        tap((gameState: GameStates) => this.handleGameStateChange(gameState))
      );
  }

  public ngOnDestroy(): void {
    this.onDestroySubject.next(null);
  }

  public toggleGameState(): void {
    this.hostService.toggleGameState();
  }

  private handleGameStateChange(gameState: GameStates): void {
    this.reviewCardsSubject$.next(gameState === GameStates.REVIEW);
  }
}
