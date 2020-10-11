import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { SocketEvents, Vote } from '@planning-poker/api-interfaces';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class PokerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() public server: Server;

  public handleConnection(a, b, c, d): void {
    console.log(a, b, c, d);
  }

  public handleDisconnect(): void {
  }

  @SubscribeMessage(SocketEvents.VOTE)
  public onVote(client: Socket, message: Vote): void {
    client.broadcast.emit(SocketEvents.VOTE, message);
  }
}
