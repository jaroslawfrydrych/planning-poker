import { Injectable } from '@angular/core';
import {
  Cards,
  ClientType,
  GameStateBroadcastDto,
  JoinRoomCodeResponseDto,
  RoomInfoInterface
} from '@planning-poker/api-interfaces';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { PokerService } from '../services/poker.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  public roomId: string;

  constructor(private pokerService: PokerService) {
  }

  public checkCode(code: string): Observable<JoinRoomCodeResponseDto> {
    return this.pokerService.checkRoomCode(code)
      .pipe(
        delay(1500),
        tap((response: JoinRoomCodeResponseDto) => {
          if (response.valid) {
            this.roomId = code;
          }
        })
      );
  }

  public sendCard(card: Cards): void {
    this.pokerService.sendVote({
      card,
      room: this.roomId
    });
  }

  public getGameState(): Observable<GameStateBroadcastDto> {
    return this.pokerService.receiveGameState();
  }

  public joinRoom(name: string): void {
    this.pokerService.joinRoom(this.roomId, ClientType.VOTER, name);
  }

  public getRoomInfo(): Observable<RoomInfoInterface> {
    return this.pokerService.getRoomInfo(this.roomId);
  }

  public onRoomRemove(): Observable<null> {
    return this.pokerService.onRoomRemove();
  }
}
