import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import {
  GameStateBroadcastDto,
  GameStates,
  JoinRequestDto,
  Player,
  PlayerStatuses,
  PlayerType,
  ResultsDto,
  SocketEvents,
  Vote
} from '@planning-poker/api-interfaces';

import { PokerService } from './poker.service';
import { Room } from './room';

@WebSocketGateway()
export class PokerGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() public server: Server;

  constructor(private pokerService: PokerService) {
  }

  public handleConnection(client: Socket): void {
    console.log('on connect', client.id);
    this.pokerService.addPlayer({
      id: client.id
    });
  }

  public handleDisconnect(client: Socket): void {
    console.log('on disconnect', client.id);
    const room: Room = this.pokerService.findPlayerRoom(client.id);

    if (!room) {
      return;
    }
    const player: Player = room.getPlayer(client.id);

    if (player && player.type === PlayerType.HOST) {
      console.log('remove room', room.id);
      this.removeRoom(room.id);
    } else if (room) {
      room.removePlayer(client.id);
    }

    this.pokerService.removePlayer(client.id);

    this.emitPlayersChangeToRoom(room.id);
  }

  /**
   * On user vote.
   * @param client
   * @param card
   * @param roomNumber
   */
  @SubscribeMessage(SocketEvents.VOTE)
  public onVote(client: Socket, {card, roomNumber}: Vote): void {
    const room: Room = this.pokerService.findPlayerRoom(client.id);

    if (!room || room.state === GameStates.REVIEW) {
      return;
    }

    room.patchPlayer(client.id, {
      card,
      status: PlayerStatuses.VOTED
    });

    this.emitPlayerVoted(room, client.id);
  }

  /**
   * On host change game state.
   * @param client
   * @param roomNumber
   */
  @SubscribeMessage(SocketEvents.STATE)
  public onState(client: Socket, roomNumber: string): void {
    this.pokerService.toggleRoomGameState(roomNumber);
    const state: GameStates = this.pokerService.getRoomGameState(roomNumber);
    const broadcastMessage: GameStateBroadcastDto = {
      state
    };

    this.serverEmitTo(roomNumber, SocketEvents.STATE, broadcastMessage);

    if (state === GameStates.IN_PROGRESS) {
      this.pokerService.resetVotingForRoom(roomNumber);
    } else {
      this.emitResultsToRoom(roomNumber);
    }
  }

  /**
   * On user join to room.
   * @param client
   * @param message
   */
  @SubscribeMessage(SocketEvents.JOIN)
  public onJoin(client: Socket, message: JoinRequestDto): void {
    const roomNumber: string = message.room;
    const room: Room = this.pokerService.getRoom(roomNumber);

    room.addPlayer({
      id: client.id,
      name: message.name,
      type: message.type
    });

    client.join(roomNumber);
    this.emitPlayersChangeToRoom(roomNumber);
  }

  /**
   * On player leave room.
   * @param client
   */
  @SubscribeMessage(SocketEvents.LEAVE)
  public onLeave(client: Socket): void {
    const room: Room = this.pokerService.findPlayerRoom(client.id);

    if (!room) {
      return;
    }

    client.leave(room.id);
    room.removePlayer(client.id);
    this.emitPlayersChangeToRoom(room.id);
  }

  /**
   * On host close room.
   * @param client
   * @param roomNumber
   */
  @SubscribeMessage(SocketEvents.CLOSE_ROOM)
  public onCloseRoom(client: Socket, roomNumber: string): void {
    this.removeRoom(roomNumber);
  }

  public emitPlayersChangeToRoom(roomNumber: string): void {
    const room: Room = this.pokerService.getRoom(roomNumber);

    if (!room) {
      return;
    }

    const players: Player[] = room.players
      .map((player: Player) => {
        return {
          id: player.id,
          name: player.name
        };
      });

    this.serverEmitTo(roomNumber, SocketEvents.PLAYERS, {players});
  }

  @SubscribeMessage(SocketEvents.ROOM_JOINED)
  public onRoomJoined(client: Socket): void {
    const room: Room = this.pokerService.findPlayerRoom(client.id);

    if (room.state === GameStates.REVIEW) {
      const results: ResultsDto = this.getRoomResults(room.id);
      this.serverEmitTo<ResultsDto>(client.id, SocketEvents.RESULTS, results);
    }
  }

  public emitResultsToRoom(roomNumber: string): void {
    const results: ResultsDto = this.getRoomResults(roomNumber);
    this.serverEmitTo<ResultsDto>(roomNumber, SocketEvents.RESULTS, results);
  }

  private getRoomResults(roomNumber: string): ResultsDto {
    const room: Room = this.pokerService.getRoom(roomNumber);

    const results: ResultsDto = {};

    room.players.forEach((player: Player) => {
      results[player.id] = {
        card: player.card,
        name: player.name
      };
    });

    return results;
  }

  private serverEmitTo<T>(roomNumber: string, socketEvent: SocketEvents, payload?: T): boolean {
    return this.server.to(roomNumber).emit(socketEvent, payload);
  }

  private removeRoom(roomNumber: string) {
    this.pokerService.removeRoom(roomNumber);
    this.emitRoomRemoved(roomNumber);
  }

  private emitRoomRemoved(roomNumber: string): void {
    this.serverEmitTo(roomNumber, SocketEvents.ROOM_REMOVED);
  }

  private emitPlayerVoted(room: Room, clientId: string): void {
    this.server.to(room.host.id).emit(SocketEvents.VOTED, clientId);
  }
}
