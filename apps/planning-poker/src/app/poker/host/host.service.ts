import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

import { GameStates, Player, PlayerType } from '@planning-poker/api-interfaces';

import { PokerService } from '../service/poker.service';
import { HostActions } from './store/actions/host.actions';
import { HostState } from './store/states/host.state';
import SetGameState = HostActions.SetGameState;
import SetGameUsers = HostActions.SetGameUsers;

@Injectable({
  providedIn: 'root'
})
export class HostService {

  public gameState$: Observable<GameStates>;
  private gameStateSubject$: BehaviorSubject<GameStates>;
  private hostRoomSubject$: BehaviorSubject<string>;
  private socketEventsSubscriptions: Subscription = new Subscription();

  constructor(private pokerService: PokerService,
              private store: Store) {
    this.gameStateSubject$ = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);
    this.gameState$ = this.gameStateSubject$.asObservable();
    this.hostRoomSubject$ = new BehaviorSubject<string>(null);
  }

  public get hostRoom(): string {
    return this.hostRoomSubject$.getValue();
  }

  public set hostRoom(value: string) {
    this.hostRoomSubject$.next(value);
  }

  public get gameState(): GameStates {
    return this.gameStateSubject$.getValue();
  }

  public set gameState(value: GameStates) {
    this.gameStateSubject$.next(value);
  }

  public getUsers(): Observable<Player[]> {
    return this.pokerService.getUsers();
  }

  public toggleGameState(roomId: string): void {
    this.pokerService.toggleGameState(roomId);
  }

  public currentTime(): Observable<Date> {
    return interval(1000)
      .pipe(
        startWith(<Date>null),
        map(() => new Date())
      );
  }

  public getGameState(): Observable<GameStates> {
    return this.pokerService.receiveGameState();
  }

  public joinSocketRoom(): void {
    this.store.select(HostState.roomNumber)
      .pipe(
        take(1)
      )
      .subscribe((roomNumber: string) => {
        this.pokerService.joinRoom(roomNumber, PlayerType.HOST);
      });
  }

  public listenToSocketEvents() {
    /**
     * Listen to game state changes
     */
    const receiveGameState = this.getGameState()
      .subscribe((gameState: GameStates) => {
        this.store.dispatch(new SetGameState(gameState));
      });

    this.socketEventsSubscriptions.add(receiveGameState);

    /**
     * Listen to users changes
     */
    const receiveUsers = this.getUsers()
      .subscribe((users: Player[]) => {
        this.store.dispatch(new SetGameUsers(users));
      });

    this.socketEventsSubscriptions.add(receiveUsers);
  }

  public closeSocketEvents() {
    this.socketEventsSubscriptions.unsubscribe();
  }
}

