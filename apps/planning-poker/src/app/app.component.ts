import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';
import { filter, pairwise, takeUntil } from 'rxjs/operators';
import { routerAnimations } from './app.animations';

@Component({
  selector: 'planning-poker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routerAnimations
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  private destroySubject$: Subject<null> = new Subject<null>();

  constructor(private socket: Socket,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.socket.connect();

    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        pairwise(),
        takeUntil(this.destroySubject$)
      )
      .subscribe(([previous, current]: [RouterEvent, RouterEvent]) => {
        if (previous.url !== '/' && current.url === '/') {
          this.socket.disconnect();
          this.socket.connect();
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
