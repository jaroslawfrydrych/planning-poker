import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  GameStateBroadcastDto,
  GameStates,
  JoinRequestDto,
  JoinRoomCodeRequestDto,
  JoinRoomCodeResponseDto,
  Player,
  PlayersResponseDto,
  PlayerType,
  RoomInfo,
  SocketEvents,
  Vote
} from '@planning-poker/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(private socket: Socket,
              private httpClient: HttpClient) {
  }

  public createRoom(): Observable<RoomInfo> {
    return this.httpClient
      .post<RoomInfo>('/api/create-room', {
        clientId: this.socket.ioSocket.id
      });
  }

  public chooseCard(vote: Vote): void {
    this.socket.emit(SocketEvents.VOTE, vote);
  }

  public toggleGameState(roomNumber: string): void {
    this.socket.emit(SocketEvents.STATE, roomNumber);
  }

  public getGameState(): Observable<GameStates> {
    return this.socket.fromEvent(SocketEvents.STATE)
      .pipe(
        map((response: GameStateBroadcastDto) => response.state)
      );
  }

  public getPlayers(): Observable<Player[]> {
    return this.socket.fromEvent(SocketEvents.PLAYERS)
      .pipe(
        map((response: PlayersResponseDto) => response.players)
      );
  }

  public joinRoom(room: string, type: PlayerType, name?: string): void {
    const request: JoinRequestDto = {
      name,
      room,
      type
    };
    this.socket.emit(SocketEvents.JOIN, request);
  }

  public validateRoomCode(code: string): Observable<JoinRoomCodeResponseDto> {
    const request: JoinRoomCodeRequestDto = {
      id: code
    };

    return this.httpClient.post<JoinRoomCodeResponseDto>('/api/join-room-code', request);
  }

  public getRoomInfo(code: string): Observable<RoomInfo> {
    const request: JoinRoomCodeRequestDto = {
      id: code
    };

    return this.httpClient.post<RoomInfo>('/api/room-info', request);
  }

  public roomRemove(): Observable<null> {
    return this.socket.fromEvent(SocketEvents.ROOM_REMOVED);
  }

  public leaveRoom(): void {
    this.socket.emit(SocketEvents.LEAVE);
  }

  public closeRoom(roomNumber: string): void {
    this.socket.emit(SocketEvents.CLOSE_ROOM, roomNumber);
  }

  public playerVoted(): Observable<any> {
    return this.socket.fromEvent(SocketEvents.VOTED);
  }
}
