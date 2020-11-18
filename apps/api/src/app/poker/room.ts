import { BehaviorSubject } from 'rxjs';

import { GameStates, Player, PlayerType } from '@planning-poker/api-interfaces';

export class Room {

  public id: string;
  private playersMap: Map<string, Player> = new Map();
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

  public get players(): Player[] {
    return this.allPlayersArray
      .filter((player: Player) => player.type === PlayerType.VOTER)
      .sort((firstPlayer: Player, secondPlayer: Player) => secondPlayer.date - firstPlayer.date);
  }

  public get host(): Player {
    return this.allPlayersArray
      .find((player: Player) => player.type === PlayerType.HOST);
  }

  public generateRoomNumber(): void {
    this.id = Room.generateRandomNumber();
  }

  public addPlayer(player: Player): void {
    this.playersMap.set(player.id, player);
  }

  public getPlayer(playerId: string): Player {
    return this.playersMap.get(playerId);
  }

  public removePlayer(playerId: string): void {
    this.playersMap.delete(playerId);
  }

  public patchPlayer(playerId: string, patchData: Partial<Player>): void {
    const player: Player = this.playersMap.get(playerId);

    this.playersMap.set(playerId, {
      ...player,
      ...patchData
    });
  }

  public hasRoomPlayer(playerId: string): boolean {
    return this.playersMap.has(playerId);
  }

  private get allPlayersArray(): Player[] {
    return Array.from(this.playersMap.values())
  }
}
