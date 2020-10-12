import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ClientType,
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

  public toggleGameState(roomId: string): void {
    this.socket.emit(SocketEvents.STATE, roomId);
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

  public joinRoom(room: string, type: ClientType, name?: string): void {
    const request: JoinRequestDto = {
      name,
      room,
      type
    };
    this.socket.emit(SocketEvents.JOIN, request);
  }

  public checkRoomCode(code: string): Observable<JoinRoomCodeResponseDto> {
    const request: JoinRoomCodeRequestDto = {
      id: code
    };

    return this.httpClient.post<JoinRoomCodeResponseDto>('/api/join-room-code', request);
  }

  public getRoomInfo(code: string): Observable<RoomInfoInterface> {
    const request: JoinRoomCodeRequestDto = {
      id: code
    };

    return this.httpClient.post<RoomInfoInterface>('/api/room-info', request);
  }

  public onRoomRemove(): Observable<null> {
    return this.socket.fromEvent(SocketEvents.ROOM_REMOVED);
  }
}
