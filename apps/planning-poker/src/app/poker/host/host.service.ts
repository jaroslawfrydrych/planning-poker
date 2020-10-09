import { Injectable } from '@angular/core';
import { Cards } from '@shared/card/cards.enum';
import { GameState } from '@shared/enum/game-state.enum';
import { UserStatus } from '@shared/enum/user-status.enum';
import { User } from '@shared/model/user';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  public gameState$: Observable<GameState>;
  private gameStateSubject$: BehaviorSubject<GameState>;
  private mockUserData: User[] = [
    {
      id: '1',
      name: 'Stefan',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatus.VOTED,
      card: Cards.HUNDRED
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Stefan',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatus.VOTED,
      card: Cards.HALF
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Stefan',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatus.VOTED,
      card: Cards.FORTY
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Stefan',
      status: UserStatus.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatus.VOTED,
      card: Cards.ONE
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatus.WAITING,
      card: null
    }
  ];

  constructor() {
    this.gameStateSubject$ = new BehaviorSubject<GameState>(GameState.IN_PROGRESS);
    this.gameState$ = this.gameStateSubject$.asObservable();
  }

  public set gameState(value: GameState) {
    this.gameStateSubject$.next(value);
  }

  public get gameState(): GameState {
    return this.gameStateSubject$.getValue();
  }

  public getUsers(): Observable<User[]> {
    return of(this.mockUserData);
  }

  public toggleGameState(): void {
    switch (this.gameState) {
      case GameState.IN_PROGRESS:
        this.gameState = GameState.REVIEW;
        break;

      case GameState.REVIEW:
        this.gameState = GameState.IN_PROGRESS;
        // this.mockUserData[1].status = UserStatus.WAITING;
        break;
    }
  }

  public currentTime(): Observable<Date> {
    return interval(1000)
      .pipe(
        map(() => new Date())
      );
  }
}
