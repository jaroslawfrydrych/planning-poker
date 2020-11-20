import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';

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

  public reconnectFailed$(): Observable<null> {
    const subject: Subject<null> = new Subject<null>();

    this.socket.on('reconnect_failed', () => {
      subject.next(null);
    });

    return subject;
  }

  public connect$(): Observable<null> {
    const subject: Subject<null> = new Subject<null>();

    this.socket.on('connect', () => {
      subject.next(null);
    });

    return subject;
  }
}
