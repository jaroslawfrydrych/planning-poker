import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {
  Client,
  GameStateBroadcastDto,
  GameStates,
  JoinRequestDto,
  SocketEvents,
  UsersResponseDto,
  Vote
} from '@planning-poker/api-interfaces';
import { Server, Socket } from 'socket.io';
import { PokerService } from './poker.service';

@WebSocketGateway()
export class PokerGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() public server: Server;

  constructor(private pokerService: PokerService) {
  }

  public handleConnection(client: Socket): void {
    this.pokerService.addClient({
      id: client.id
    });
  }

  public handleDisconnect(client: Socket): void {
    const clientId: string = client.id;

    if (this.pokerService.isClientHost(clientId)) {
      const clientData: Client = this.pokerService.getClientById(clientId);
      this.pokerService.removeRoom(clientData.room);
      this.server.emit(SocketEvents.ROOM_REMOVED, clientData.room);
    }

    this.pokerService.removeClient(client.id);
    this.emitUsersChange();
  }

  @SubscribeMessage(SocketEvents.VOTE)
  public onVote(client: Socket, message: Vote): void {
    this.pokerService.setClientCard(client.id, message.card);
    this.emitUsersChange();
  }

  @SubscribeMessage(SocketEvents.STATE)
  public onState(client: Socket): void {
    const clientData: Client = this.pokerService.getClientById(client.id);
    const state: GameStates = this.pokerService.toggleRoomGameState(clientData.room);
    const broadcastMessage: GameStateBroadcastDto = {
      state,
      room: clientData.room
    };

    this.server.emit(SocketEvents.STATE, broadcastMessage);

    if (state === GameStates.IN_PROGRESS) {
      this.pokerService.resetVotingForRoom(clientData.room);
      this.emitUsersChange();
    }
  }

  @SubscribeMessage(SocketEvents.JOIN)
  public onJoin(client: Socket, message: JoinRequestDto): void {
    this.pokerService.setClientName(client.id, message.name);
    this.pokerService.assignClientToRoom(client.id, message.room);
    this.pokerService.setClientAsVoter(client.id);
    this.emitUsersChange();
  }

  public emitUsersChange(): void {
    const clients: Client[] = Array.from(this.pokerService.clients.values())
      .sort((clientA: Client, clientB: Client) => clientA.date - clientB.date);

    const clientsResponse: UsersResponseDto = {
      clients
    };

    this.server.emit(SocketEvents.USERS, clientsResponse);
  }
}
