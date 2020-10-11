import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GameStateBroadcastDto,
  GameStates,
  JoinRequestDto,
  JoinRoomCodeRequestDto,
  JoinRoomCodeResponseDto,
  RoomInfoInterface,
  SocketEvents,
  State,
  UsersResponseDto,
  Vote,
  Voted
} from '@planning-poker/api-interfaces';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(private socket: Socket,
              private httpClient: HttpClient) {
  }

  public createRoom(): Observable<RoomInfoInterface> {
    return this.httpClient
      .post<RoomInfoInterface>('/api/create-room', {
        clientId: this.socket.ioSocket.id
      });
  }

  public sendVote(vote: Vote): void {
    this.socket.emit(SocketEvents.VOTE, vote);
  }

  public changeGameState(state: GameStates): void {
    const stateMessage: State = {
      state
    };

    this.socket.emit(SocketEvents.STATE, stateMessage);
  }

  public receiveVote(): Observable<Voted> {
    return this.socket.fromEvent(SocketEvents.VOTED);
  }

  public receiveGameState(): Observable<GameStateBroadcastDto> {
    return this.socket.fromEvent(SocketEvents.STATE);
  }

  public getUsers(): Observable<UsersResponseDto> {
    return this.socket.fromEvent(SocketEvents.USERS);
  }

  public joinRoom(room: string, name: string) {
    const request: JoinRequestDto = {
      name,
      room
    };
    this.socket.emit(SocketEvents.JOIN, request);
  }

  public checkRoomCode(code: string): Observable<JoinRoomCodeResponseDto> {
    const request: JoinRoomCodeRequestDto = {
      id: code
    };

    return this.httpClient.post<JoinRoomCodeResponseDto>('/api/join-room-code', request);
  }
}
