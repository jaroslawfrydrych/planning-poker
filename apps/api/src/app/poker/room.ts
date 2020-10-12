import { Client, GameStates } from '@planning-poker/api-interfaces';
import { BehaviorSubject } from 'rxjs';

export class Room {

  public id: string;
  public clients: Map<string, Client> = new Map();
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

  public addClientToRoom(client: Client): void {
    this.clients.set(client.id, client);
  }

  public removeClientFromFrom(clientId: string): void {
    this.clients.delete(clientId);
  }

  public updateClientInRoom(client: Client): void {
    this.clients.set(client.id, client);
  }

  public getClientFromRoom(clientId: string): Client {
    return this.clients.get(clientId);
  }

  private generateId(): string {
    const calculation: number = Math.floor(Math.random()*90000) + 10000;
    return calculation.toString();
  }
}
