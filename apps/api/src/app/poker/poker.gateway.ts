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
    const clientId: string = client.id;
    const playerData: Player = this.pokerService.getPlayerById(clientId);
    const roomId: string = playerData.room;
    const room: Room = this.pokerService.getRoomById(roomId);

    if (!room) {
      return;
    }

    const clientInRoom: Player = room.getPlayerFromRoom(clientId);

    if (clientInRoom.type === PlayerType.HOST) {
      console.log('remove room', playerData.room);
      this.pokerService.removeRoom(playerData.room);
      this.server.to(roomId).emit(SocketEvents.ROOM_REMOVED);
    } else if (room) {
      room.removePlayerFromFrom(client.id);
    }

    this.pokerService.removePlayer(client.id);

    this.emitUsersChangeToRoom(playerData.room);
  }

  @SubscribeMessage(SocketEvents.VOTE)
  public onVote(client: Socket, message: Vote): void {
    const room: Room = this.pokerService.getRoomById(message.roomNumber);

    if (!room || room.state === GameStates.REVIEW) {
      return;
    }

    const playerData: Player = room.getPlayerFromRoom(client.id);
    playerData.card = message.card;
    playerData.status = PlayerStatuses.VOTED;
    room.updatePlayerInRoom(playerData);
    this.emitUsersChangeToRoom(message.roomNumber);
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
    const room: Room = this.pokerService.getRoomById(roomNumber);
    room.addPlayerToRoom({
      id: client.id,
      name: message.name,
      type: message.type
    });

    client.join(roomNumber);
    this.pokerService.setPlayerRoom(client.id, roomNumber);
    this.emitUsersChangeToRoom(roomNumber);
  }

  public emitUsersChangeToRoom(roomNumber: string): void {
    const room: Room = this.pokerService.getRoomById(roomNumber);

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
