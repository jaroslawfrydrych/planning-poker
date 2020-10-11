import { Injectable } from '@angular/core';
import { GameStates, UserStatuses } from '@planning-poker/api-interfaces';
import { Cards } from '@shared/card/cards.enum';
import { User } from '@shared/model/user';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  public gameState$: Observable<GameStates>;
  private gameStateSubject$: BehaviorSubject<GameStates>;
  private mockUserData: User[] = [
    {
      id: '1',
      name: 'Stefan',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatuses.VOTED,
      card: Cards.HUNDRED
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Stefan',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatuses.VOTED,
      card: Cards.HALF
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Stefan',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatuses.VOTED,
      card: Cards.FORTY
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Stefan',
      status: UserStatuses.WAITING,
      card: null
    },
    {
      id: '1',
      name: 'Marian',
      status: UserStatuses.VOTED,
      card: Cards.ONE
    },
    {
      id: '1',
      name: 'Andrzej',
      status: UserStatuses.WAITING,
      card: null
    }
  ];

  constructor() {
    this.gameStateSubject$ = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);
    this.gameState$ = this.gameStateSubject$.asObservable();
  }

  public set gameState(value: GameStates) {
    this.gameStateSubject$.next(value);
  }

  public get gameState(): GameStates {
    return this.gameStateSubject$.getValue();
  }

  public getUsers(): Observable<User[]> {
    return of(this.mockUserData);
  }

  public toggleGameState(): void {
    switch (this.gameState) {
      case GameStates.IN_PROGRESS:
        this.gameState = GameStates.REVIEW;
        break;

      case GameStates.REVIEW:
        this.gameState = GameStates.IN_PROGRESS;
        // this.mockUserData[1].status = UserStatuses.WAITING;
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
