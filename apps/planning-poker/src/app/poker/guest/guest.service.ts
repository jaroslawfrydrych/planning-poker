import { Injectable } from '@angular/core';
import { Cards } from '@shared/card/cards.enum';
import { GameState } from '@shared/enum/game-state.enum';
import { UserStatus } from '@shared/enum/user-status.enum';
import { User } from '@shared/model/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor() { }

  public checkCode(code: string): Observable<null> {
    return of(null)
      .pipe(delay(1500));
  }

  public sendCard(card: Cards): void {
  }

  public getGameState(): Observable<GameState> {
    return of(GameState.IN_PROGRESS);
  }

  public getUsers(): Observable<User[]> {
    return of([
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
        card: Cards.EIGHT
      },
      {
        id: '1',
        name: 'Andrzej',
        status: UserStatus.WAITING,
        card: null
      }
    ]);
  }
}
