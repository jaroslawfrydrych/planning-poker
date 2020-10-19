import { BehaviorSubject } from 'rxjs';

import { GameStates, Player } from '@planning-poker/api-interfaces';

export class Room {

  public id: string;
  public host: Player;
  public players: Map<string, Player> = new Map();
  private stateSubject$: BehaviorSubject<GameStates> = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);

  constructor() {
    this.id = this.generateId();
  }

  public get state(): GameStates {
    return this.stateSubject$.getValue();
  }

  public set state(roomState: GameStates) {
    this.stateSubject$.next(roomState);
  }

  public regenerateId(): void {
    this.id = this.generateId();
  }

  public addPlayerToRoom(player: Player): void {
    this.players.set(player.id, player);
  }

  public setRoomHost(player: Player): void {
    this.host = player;
  }

  public removePlayerFromFrom(playerId: string): void {
    this.players.delete(playerId);
  }

  public updatePlayerInRoom(player: Player): void {
    this.players.set(player.id, player);
  }

  public getPlayerFromRoom(playerId: string): Player {
    return this.players.get(playerId);
  }

  private generateId(): string {
    const calculation: number = Math.floor(Math.random()*90000) + 10000;
    return calculation.toString();
  }
}
