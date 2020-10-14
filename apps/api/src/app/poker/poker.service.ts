import { Injectable } from '@nestjs/common';
import { Client, ClientType, GameStates, SocketEvents, UserStatuses } from '@planning-poker/api-interfaces';
import { Room } from './room';

@Injectable()
export class PokerService {
  public clients: Map<string, Client> = new Map<string, Client>();
  public rooms: Map<string, Room> = new Map<string, Room>();

  constructor() {
  }

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

  public addClient(client: Client) {
    this.clients.set(client.id, client);
  }

  public setClientARoom(clientId: string, roomId: string) {
    const client: Client = this.clients.get(clientId);
    client.room = roomId;
    this.clients.set(clientId, client);
  }

  public removeClient(id: string) {
    this.clients.delete(id);
  }

  public isClientHost(id: string): boolean {
    return this.clients.get(id).type === ClientType.HOST;
  }

  public getClientById(id: string): Client {
    return this.clients.get(id);
  }

  public checkIsRoomExists(id: string): boolean {
    return this.rooms.has(id);
  }

  public resetVotingForRoom(roomId: string): void {
    const room: Room = this.getRoomById(roomId);

    room.clients.forEach((client: Client) => {
      client.card = null;
      client.status = UserStatuses.WAITING;
      room.updateClientInRoom(client);
    });
  }

  public getRoomById(id: string): Room {
    return this.rooms.get(id);
  }
}
