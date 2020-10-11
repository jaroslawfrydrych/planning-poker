import { Injectable } from '@nestjs/common';
import { Cards, Client, ClientType, GameStates, UserStatuses } from '@planning-poker/api-interfaces';
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

  public removeClient(id: string) {
    this.clients.delete(id);
  }

  public isClientHost(id: string): boolean {
    return this.clients.get(id).type === ClientType.HOST;
  }

  public assignClientToRoom(clientId: string, roomId: string): void {
    const client: Client = this.getClientById(clientId);
    client.room = roomId;

    this.clients.set(clientId, client);
  }

  public setClientAsHost(clientId: string): void {
    const client: Client = this.getClientById(clientId);
    client.type = ClientType.HOST;

    this.clients.set(clientId, client);
  }

  public setClientAsVoter(clientId: string): void {
    const client: Client = this.getClientById(clientId);
    client.type = ClientType.VOTER;

    this.clients.set(clientId, client);
  }

  public getClientById(id: string): Client {
    return this.clients.get(id);
  }

  public checkIsRoomExists(id: string): boolean {
    return this.rooms.has(id);
  }

  public setClientName(id: string, name: string): void {
    const client: Client = this.getClientById(id);
    client.name = name;
    client.date = new Date().getTime();

    this.clients.set(id, client);
  }

  public setClientCard(id: string, card: Cards): void {
    const client: Client = this.getClientById(id);
    client.card = card;
    client.status = UserStatuses.VOTED;

    this.clients.set(id, client);
  }

  public resetVotingForRoom(room: string): void {
    this.clients.forEach((client: Client) => {
      console.log(client);
      if (client.room === room) {
        client.card = null;
        client.status = UserStatuses.WAITING;
        this.clients.set(client.id, client);
      }
    });
  }
}
