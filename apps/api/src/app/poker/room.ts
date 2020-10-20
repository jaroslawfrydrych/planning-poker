import { BehaviorSubject } from 'rxjs';

import { GameStates, Player } from '@planning-poker/api-interfaces';

export class Room {

  public id: string;
  public host: Player;
  public players: Map<string, Player> = new Map();
  private stateSubject$: BehaviorSubject<GameStates> = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);

  private static generateRandomNumber(): string {
    const calculation: number = Math.floor(Math.random() * 90000) + 10000;
    return calculation.toString();
  }

  constructor() {
    this.generateRoomNumber();
  }

  public get state(): GameStates {
    return this.stateSubject$.getValue();
  }

  public set state(roomState: GameStates) {
    this.stateSubject$.next(roomState);
  }

  public generateRoomNumber(): void {
    this.id = Room.generateRandomNumber();
  }

  public addPlayer(player: Player): void {
    this.players.set(player.id, player);
  }

  public getPlayer(playerId: string): Player {
    return this.players.get(playerId);
  }

  public removePlayer(playerId: string): void {
    this.players.delete(playerId);
  }

  public patchPlayer(playerId: string, patchData: Partial<Player>): void {
    const player: Player = this.players.get(playerId);

    this.players.set(playerId, {
      ...player,
      ...patchData
    });
  }

  public hasRoomPlayer(playerId: string): boolean {
    return this.players.has(playerId);
  }
}
