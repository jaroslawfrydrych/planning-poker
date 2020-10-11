import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly socket: Socket) {
  }

  public connectToSocket(){
    this.socket.connect();
  }
}
