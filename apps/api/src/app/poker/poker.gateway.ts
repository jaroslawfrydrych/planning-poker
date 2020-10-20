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
      this.pokerService.removeRoom(room.id);
      this.server.to(room.id).emit(SocketEvents.ROOM_REMOVED);
    } else if (room) {
      room.removePlayer(client.id);
    }

    this.pokerService.removePlayer(client.id);

    this.emitUsersChangeToRoom(room.id);
  }

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

    this.emitUsersChangeToRoom(roomNumber);
  }

  @SubscribeMessage(SocketEvents.STATE)
  public onState(client: Socket, roomNumber: string): void {
    this.pokerService.toggleRoomGameState(roomNumber);
    const state: GameStates = this.pokerService.getRoomGameState(roomNumber);
    const broadcastMessage: GameStateBroadcastDto = {
      state
    };

    this.server.to(roomNumber).emit(SocketEvents.STATE, broadcastMessage);

    if (state === GameStates.IN_PROGRESS) {
      this.pokerService.resetVotingForRoom(roomNumber);
      this.emitUsersChangeToRoom(roomNumber);
    }
  }

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

  public emitUsersChangeToRoom(roomNumber: string): void {
    const room: Room = this.pokerService.getRoom(roomNumber);

    if (!room) {
      return;
    }

    const players: Player[] = Array.from(room.players.values())
      .sort((firstPlayer: Player, secondPlayer: Player) => secondPlayer.date - firstPlayer.date)
      .filter((player: Player) => player.type === PlayerType.VOTER);

    const playersResponse: PlayersResponseDto = {
      players
    };

    this.server.to(roomNumber).emit(SocketEvents.PLAYERS, playersResponse);
  }
}
