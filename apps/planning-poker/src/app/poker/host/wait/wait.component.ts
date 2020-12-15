import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable, of, race } from 'rxjs';
import { delay, filter, map, mergeMap, take } from 'rxjs/operators';

import { ConnectionStatus, TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { SocketState } from '@store/states/socket.state';

import { AppService } from '../../../app.service';
import { HostActions } from '../store/actions/host.actions';

import CreateRoom = HostActions.CreateRoom;

@Component({
  selector: 'planning-poker-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
@TakeUntilDestroy()
export class WaitComponent implements OnInit {

  @Select(SocketState.connectionStatus) public connectionStatus$: Observable<ConnectionStatus>;

  constructor(private router: Router,
              private appService: AppService,
              private store: Store,
              private $gaService: GoogleAnalyticsService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');

    const connectionStatus$: Observable<ConnectionStatus> = this.connectionStatus$
      .pipe(
        map((connectionStatus: ConnectionStatus) => {
          if (connectionStatus === ConnectionStatus.DISCONNECTED) {
            this.appService.reconnectSocket();
            return null;
          }

          return connectionStatus;
        }),
        filter((connectionStatus: ConnectionStatus) => connectionStatus === ConnectionStatus.CONNECTED),
        take(1)
      );

    const connectionTimeout$: Observable<null> = of(null)
      .pipe(
        delay(15000),
        map(() => {
          throw new Error('timeout');
        })
      );

    race(connectionStatus$, connectionTimeout$)
      .pipe(
        mergeMap(() => this.store.dispatch(new CreateRoom())),
        delay(1500),
        untilDestroyed(this)
      )
      .subscribe(
        () => this.router.navigateByUrl('/host/board'),
        (error: ConnectionStatus) => this.handleSocketTimeout(error));
  }

  private handleSocketTimeout(error: ConnectionStatus) {
    // TODO add snakcbar or modal info
    console.error('Error of socket due to', error);
    this.router.navigateByUrl('/');
  }
}
