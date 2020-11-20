import { Injectable } from '@nestjs/common';

import { GameStates, Player, PlayerStatuses } from '@planning-poker/api-interfaces';

import { Room } from './room';

@Injectable()
export class PokerService {
  public rooms: Map<string, Room> = new Map<string, Room>();
  public players: Map<string, Player> = new Map<string, Player>();

  public toggleGameState(currentState: GameStates): GameStates {
    switch (currentState) {
      case GameStates.IN_PROGRESS:
        return GameStates.REVIEW;

      case GameStates.REVIEW:
        return GameStates.IN_PROGRESS;
    }
  }

  public toggleRoomGameState(roomNumber: string): void {
    const room: Room = this.rooms.get(roomNumber);

    if (!room) {
      return;
    }

    room.state = this.toggleGameState(room.state);
    this.rooms.set(roomNumber, room);
  }

  public getRoomGameState(roomNumber: string): GameStates {
    const room: Room = this.rooms.get(roomNumber);
    return room.state;
  }

  public createRoom(): Room {
    const room = new Room();

    if (this.checkIsRoomExists(room.id)) {
      while (!this.checkIsRoomExists(room.id)) {
        room.generateRoomNumber();
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

  public removePlayer(id: string) {
    this.players.delete(id);
  }

  public checkIsRoomExists(id: string): boolean {
    return this.rooms.has(id);
  }

  public resetVotingForRoom(roomNumber: string): void {
    const room: Room = this.getRoom(roomNumber);

    room.players.forEach((player: Player) => {
      room.patchPlayer(player.id, {
        card: null,
        status: PlayerStatuses.WAITING
      })
    });
  }

  public getRoom(roomNumber: string): Room {
    return this.rooms.get(roomNumber);
  }

  public findPlayerRoom(playerId: string): Room | null {
    const roomsArray: Room[] = Array.from(this.rooms.values());
    const foundRoom: Room = roomsArray.find((room: Room) => room.hasRoomPlayer(playerId));
    return foundRoom || null;
  }
}
