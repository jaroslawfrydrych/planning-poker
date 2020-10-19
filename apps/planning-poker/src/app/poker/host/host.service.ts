import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GameStates, Player, PlayerType, RoomInfo } from '@planning-poker/api-interfaces';

import { PokerService } from '../service/poker.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private pokerService: PokerService) {
  }

  public createRoom(): Observable<RoomInfo> {
    return this.pokerService.createRoom();
  }

  public joinRoom(roomNumber: string): void {
    this.pokerService.joinRoom(roomNumber, PlayerType.HOST);
  }

  public getUsers(): Observable<Player[]> {
    return this.pokerService.getUsers();
  }

  public getGameState(): Observable<GameStates> {
    return this.pokerService.getGameState();
  }

  public toggleGameState(roomNumber: string): void {
    return this.pokerService.toggleGameState(roomNumber);
  }
}

