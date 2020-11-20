import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Data, NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

import { TakeUntilDestroy, untilDestroyed } from '@shared/decorators/take-until-destroy.decorator';

import { routerAnimations } from './app.animations';
import { AppService } from './app.service';

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

  constructor(private appService: AppService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.appService.connectSocket();

    this.handleRouterEvents();
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
}
