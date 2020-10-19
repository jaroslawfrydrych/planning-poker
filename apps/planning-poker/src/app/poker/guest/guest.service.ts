import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

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

  public checkCode(code: string): Observable<JoinRoomCodeResponseDto> {
    return this.pokerService.checkRoomCode(code)
      .pipe(
        delay(500),
        tap((response: JoinRoomCodeResponseDto) => {
          if (response.valid) {
            this.guestRoom = code;
          }
        })
      );
  }

  public sendCard(card: Cards): void {
    this.pokerService.sendVote({
      card,
      room: this.guestRoom
    });
  }

  public getGameState(): Observable<GameStates> {
    return this.pokerService.receiveGameState();
  }

  public joinRoom(name: string): void {
    this.pokerService.joinRoom(this.guestRoom, PlayerType.VOTER, name);
  }

  public getRoomInfo(): Observable<RoomInfo> {
    return this.pokerService.getRoomInfo(this.guestRoom);
  }

  public onRoomRemove(): Observable<null> {
    return this.pokerService.onRoomRemove();
  }
}
