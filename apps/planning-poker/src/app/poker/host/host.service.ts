import { Injectable } from '@angular/core';
import {
  Client,
  ClientType,
  GameStateBroadcastDto,
  GameStates,
  RoomInfoInterface,
  UsersResponseDto
} from '@planning-poker/api-interfaces';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  public getUsers(): Observable<Client[]> {
    return this.pokerService.getUsers()
      .pipe(
        map((response: UsersResponseDto) => {
          return response.clients;
        })
      );
  }

  public toggleGameState(roomId: string): void {
    this.pokerService.toggleGameState(roomId);
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

  public joinRoom(room: string): void {
    this.pokerService.joinRoom(room, ClientType.HOST);
  }
}

