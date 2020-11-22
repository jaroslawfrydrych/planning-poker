import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { merge, Observable, Subscriber } from 'rxjs';

import { ConnectionError } from '@shared/enum/connection-error.enum';
import { ConnectionStatus } from '@shared/enum/connection-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly socket: Socket) {
  }

  public get reconnectFailed$(): Observable<ConnectionStatus> {
    return this.getObservableOfSocketEvent$<ConnectionStatus>('reconnect_failed', ConnectionError.RECONNECT_FAILED);
  }

  public get connect$(): Observable<ConnectionStatus> {
    return this.getObservableOfSocketEvent$<ConnectionStatus>('connect', ConnectionStatus.CONNECTED);
  }

  public get reconnectError$(): Observable<ConnectionStatus> {
    return this.getObservableOfSocketEvent$<ConnectionStatus>('reconnect_error', ConnectionError.RECONNECT_ERROR);
  }

  public get disconnect$(): Observable<ConnectionStatus> {
    return this.getObservableOfSocketEvent$<ConnectionStatus>('disconnect', ConnectionStatus.DISCONNECTED);
  }

  public get connectionStatusChange$(): Observable<ConnectionStatus> {
    return merge(this.connect$, this.reconnectFailed$, this.reconnectError$, this.disconnect$);
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

  private getObservableOfSocketEvent$<T>(socketEvent: string, response = null): Observable<T> {
    return new Observable<T>((observer: Subscriber<T>) => {
      this.socket.on(socketEvent, () => {
        observer.next(response);
      });
    });
  }
}
