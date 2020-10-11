import { Injectable } from '@angular/core';
import { SocketEvents, Vote } from '@planning-poker/api-interfaces';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(private socket: Socket) {
  }

  public createRoom(): void {
  }

  public sendVote(vote: Vote): void {
    this.socket.emit(SocketEvents.VOTE, vote);
  }

  public changeState(state): void {
    this.socket.emit(SocketEvents.STATE, state);
  }

  public receiveVote(): Observable<any> {
    return this.socket.fromEvent(SocketEvents.VOTE);
  }

  public getUsers(): void {
  }
}
