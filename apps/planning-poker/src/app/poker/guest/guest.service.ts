import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Cards, GameStates, JoinRoomCodeResponseDto, PlayerType, RoomInfo } from '@planning-poker/api-interfaces';

import { PokerService } from '../service/poker.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private guestRoomSubject$: BehaviorSubject<string>;

  constructor(private pokerService: PokerService) {
    this.guestRoomSubject$ = new BehaviorSubject<string>(null);
  }

  public get guestRoom(): string {
    return this.guestRoomSubject$.getValue();
  }

  public set guestRoom(value: string) {
    this.guestRoomSubject$.next(value);
  }

  public get availableCards(): Cards[] {
    return [
      Cards.ZERO,
      Cards.HALF,
      Cards.ONE,
      Cards.TWO,
      Cards.THREE,
      Cards.FIVE,
      Cards.EIGHT,
      Cards.THIRTEEN,
      Cards.TWENTY,
      Cards.FORTY,
      Cards.HUNDRED,
      Cards.QUESTION_MARK,
      Cards.COFFEE,
      Cards.INFINITE
    ];
  }

  public validateRoomNumber(roomNumber: string): Observable<JoinRoomCodeResponseDto> {
    return this.pokerService.validateRoomCode(roomNumber)
      .pipe(
        delay(500)
      );
  }

  public chooseCard(card: Cards, roomNumber: string): void {
    this.pokerService.chooseCard({
      card,
      roomNumber
    });
  }

  public getGameState(): Observable<GameStates> {
    return this.pokerService.getGameState();
  }

  public joinRoom(name: string, roomNumber: string): void {
    this.pokerService.joinRoom(roomNumber, PlayerType.VOTER, name);
  }

  public getRoomInfo(roomNumber: string): Observable<RoomInfo> {
    return this.pokerService.getRoomInfo(roomNumber);
  }

  public roomRemove(): Observable<null> {
    return this.pokerService.roomRemove();
  }
}
