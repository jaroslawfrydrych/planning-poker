import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Cards,
  Client,
  GameStateBroadcastDto,
  GameStates,
  JoinRoomCodeResponseDto,
  UserStatuses
} from '@planning-poker/api-interfaces';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { PokerService } from '../services/poker.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  public roomId: string;

  constructor(private httpClient: HttpClient,
              private pokerService: PokerService) {
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
    this.pokerService.sendVote({card});
  }

  public getGameState(): Observable<GameStateBroadcastDto> {
    return this.pokerService.receiveGameState();
  }

  public joinRoom(name: string): void {
    this.pokerService.joinRoom(this.roomId, name);
  }
}
