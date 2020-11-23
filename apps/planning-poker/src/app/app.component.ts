import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Data, NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';

import { TakeUntilDestroy } from '@shared/decorators/take-until-destroy.decorator';
import { ConnectionError } from '@shared/enum/connection-error.enum';
import { ConnectionStatus } from '@shared/enum/connection-status.enum';
import { untilDestroyed } from '@shared/operators/until-destroyed.operator';
import { SocketActions } from '@store/actions/socket.actions';
import { SocketState } from '@store/states/socket.state';

import { routerAnimations } from './app.animations';
import { AppService } from './app.service';

import SetConnectionStatus = SocketActions.SetConnectionStatus;

@Component({
  selector: 'planning-poker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routerAnimations
  ]
})
@TakeUntilDestroy()
export class AppComponent implements OnInit {

  @Select(SocketState.connectionStatus) public connectionStatus$: Observable<ConnectionStatus>;
  @Select(SocketState.connectionError) public connectionError$: Observable<ConnectionError>;

  constructor(private appService: AppService,
              private store: Store,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.appService.connectSocket();

    this.handleRouterEvents();
    this.handleSocketEvents();
    this.handleSocketErrors();
  }

  public prepareRoute(outlet: RouterOutlet): Data {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  private handleRouterEvents(): void {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        pairwise(),
        untilDestroyed(this)
      )
      .subscribe(([previous, current]: [RouterEvent, RouterEvent]) => {
        if (previous.url !== '/' && current.url === '/') {
          this.appService.reconnectSocket();
        }

        if (current.url === '/?reconnectFailed=true') {
          this.router.navigateByUrl('/');
        }
      });
  }

  private handleSocketEvents(): void {
    this.appService.connectionStatusChange$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((connectionStatus: ConnectionStatus & ConnectionError) => {
        this.store.dispatch(new SetConnectionStatus(connectionStatus));
      });
  }

  private handleSocketErrors(): void {
    this.connectionError$
      .pipe(
        pairwise(),
        filter(([prevConnectionError, nextConnectionError]: [ConnectionError, ConnectionError]) => {
          return !(prevConnectionError === ConnectionError.RECONNECT_FAILED && nextConnectionError === ConnectionError.RECONNECT_ERROR);
        }),
        map(([_, nextConnectionError]: [ConnectionError, ConnectionError]) => nextConnectionError),
        untilDestroyed(this)
      )
      .subscribe((connectionError: ConnectionError) => this.onConnectionError(connectionError));
  }

  private onConnectionError(connectionError: ConnectionError): void {
    switch (connectionError) {
      case ConnectionError.RECONNECT_ERROR:
        console.error('We are occuring connection error...');
        break;

      case ConnectionError.RECONNECT_FAILED:
        console.error('Conneciton failed');
        break;

      case null:
        console.error('Clear error');
        break;
    }
  }
}
