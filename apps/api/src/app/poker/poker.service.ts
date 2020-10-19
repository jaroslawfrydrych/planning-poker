import { Injectable } from '@nestjs/common';

import { GameStates, Player, PlayerStatuses, PlayerType } from '@planning-poker/api-interfaces';

import { Room } from './room';

@Injectable()
export class PokerService {
  public players: Map<string, Player> = new Map<string, Player>();
  public rooms: Map<string, Room> = new Map<string, Room>();

  public toggleGameState(currentState: GameStates): GameStates {
    switch (currentState) {
      case GameStates.IN_PROGRESS:
        return GameStates.REVIEW;

      case GameStates.REVIEW:
        return GameStates.IN_PROGRESS;
    }
  }

  public toggleRoomGameState(roomId: string): GameStates {
    const room: Room = this.rooms.get(roomId);

    if (!room) {
      return;
    }

    room.state = this.toggleGameState(room.state);
    this.rooms.set(roomId, room);
    return room.state;
  }

  public createRoom(): Room {
    const room = new Room();

    if (this.checkIsRoomExists(room.id)) {
      while (!this.checkIsRoomExists(room.id)) {
        room.regenerateId();
      }
    }

    this.rooms.set(room.id, room);

    return room;
  }

  public removeRoom(id: string): void {
    this.rooms.delete(id);
  }

  public addPlayer(player: Player) {
    this.players.set(player.id, player);
  }

  public setPlayerRoom(playerId: string, roomId: string) {
    const player: Player = this.players.get(playerId);
    player.room = roomId;
    this.players.set(playerId, player);
  }

  public removePlayer(id: string) {
    this.players.delete(id);
  }

  public getPlayerById(id: string): Player {
    return this.players.get(id);
  }

  public checkIsRoomExists(id: string): boolean {
    return this.rooms.has(id);
  }

  public resetVotingForRoom(roomId: string): void {
    const room: Room = this.getRoomById(roomId);

    room.players.forEach((player: Player) => {
      player.card = null;
      player.status = PlayerStatuses.WAITING;
      room.updatePlayerInRoom(player);
    });
  }

  public getRoomById(id: string): Room {
    return this.rooms.get(id);
  }
}
