import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Namespace, Server, Socket } from 'socket.io';

import {
  GameStateBroadcastDto,
  GameStates,
  JoinRequestDto,
  Player,
  PlayersResponseDto,
  PlayerStatuses,
  PlayerType,
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

    this.emitUsersChangeToRoom(room.id);
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

    this.serverTo(roomNumber).emit(SocketEvents.STATE, broadcastMessage);

    if (state === GameStates.IN_PROGRESS) {
      this.pokerService.resetVotingForRoom(roomNumber);
    } else {
      this.emitUsersChangeToRoom(roomNumber);
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
    this.emitUsersChangeToRoom(roomNumber);
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
    this.emitUsersChangeToRoom(room.id);
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

  public emitUsersChangeToRoom(roomNumber: string): void {
    const room: Room = this.pokerService.getRoom(roomNumber);

    if (!room) {
      return;
    }

    const playersResponse: PlayersResponseDto = {
      players: room.players
    };

    this.serverTo(roomNumber).emit(SocketEvents.PLAYERS, playersResponse);
  }

  private serverTo(roomNumber: string): Namespace | Server {
    return this.server.to(roomNumber);
  }

  private removeRoom(roomNumber: string) {
    this.pokerService.removeRoom(roomNumber);
    this.emitRoomRemoved(roomNumber);
  }

  private emitRoomRemoved(roomNumber: string): void {
    this.serverTo(roomNumber).emit(SocketEvents.ROOM_REMOVED);
  }

  private emitPlayerVoted(room: Room, clientId: string): void {
    this.server.to(room.host.id).emit(SocketEvents.VOTED, clientId);
  }
}
