import { Injectable } from '@angular/core';
import { GameStates, UserStatuses } from '@planning-poker/api-interfaces';
import { Cards } from '@shared/card/cards.enum';
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

  public getGameState(): Observable<GameStates> {
    return of(GameStates.IN_PROGRESS);
  }

  public getUsers(): Observable<User[]> {
    return of([
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
        card: Cards.EIGHT
      },
      {
        id: '1',
        name: 'Andrzej',
        status: UserStatuses.WAITING,
        card: null
      }
    ]);
  }
}
