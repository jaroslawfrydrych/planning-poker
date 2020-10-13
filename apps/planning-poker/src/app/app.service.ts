import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly socket: Socket) {
  }

  public connectSocket(): void {
    this.socket.connect();
  }

  public disconnectSocket(): void {
    this.socket.connect();
  }

  public reconnectSocket(): void {
    this.disconnectSocket();
    this.connectSocket();
  }
}
