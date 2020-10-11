import { Injectable } from '@angular/core';
import {
  Client,
  GameStateBroadcastDto,
  GameStates,
  RoomInfoInterface,
  UsersResponseDto, Voted
} from '@planning-poker/api-interfaces';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokerService } from '../services/poker.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  public gameState$: Observable<GameStates>;
  private gameStateSubject$: BehaviorSubject<GameStates>;

  constructor(private pokerService: PokerService) {
    this.gameStateSubject$ = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);
    this.gameState$ = this.gameStateSubject$.asObservable();
  }

  public set gameState(value: GameStates) {
    this.pokerService.changeGameState(value);
    // this.gameStateSubject$.next(value);
  }

  public get gameState(): GameStates {
    return this.gameStateSubject$.getValue();
  }

  public getUsers(): Observable<Client[]> {
    return this.pokerService.getUsers()
      .pipe(
        map((response: UsersResponseDto) => {
          return response.clients;
        })
      );
  }

  public toggleGameState(): void {
    switch (this.gameState) {
      case GameStates.IN_PROGRESS:
        this.gameState = GameStates.REVIEW;
        break;

      case GameStates.REVIEW:
        this.gameState = GameStates.IN_PROGRESS;
        break;
    }
  }

  public currentTime(): Observable<Date> {
    return interval(1000)
      .pipe(
        map(() => new Date())
      );
  }

  public createRoom(): Observable<RoomInfoInterface> {
    return this.pokerService.createRoom();
  }

  public getGameState(): Observable<GameStateBroadcastDto> {
    return this.pokerService.receiveGameState();
  }
}
