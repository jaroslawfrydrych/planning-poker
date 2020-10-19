import { Injectable } from '@angular/core';

import { GameStates, Player } from '@planning-poker/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

import { PokerService } from '../service/poker.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  public gameState$: Observable<GameStates>;
  private gameStateSubject$: BehaviorSubject<GameStates>;
  private hostRoomSubject$: BehaviorSubject<string>;

  constructor(private pokerService: PokerService) {
    this.gameStateSubject$ = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);
    this.gameState$ = this.gameStateSubject$.asObservable();
    this.hostRoomSubject$ = new BehaviorSubject<string>(null);
  }

  public get gameState(): GameStates {
    return this.gameStateSubject$.getValue();
  }

  public set gameState(value: GameStates) {
    this.gameStateSubject$.next(value);
  }

  public getUsers(): Observable<Player[]> {
    return this.pokerService.getUsers();
  }

  public toggleGameState(roomId: string): void {
    this.pokerService.toggleGameState(roomId);
  }

  public getGameState(): Observable<GameStates> {
    return this.pokerService.getGameState();
  }
}

