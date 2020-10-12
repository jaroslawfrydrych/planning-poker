import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Socket } from 'ngx-socket-io';
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
export class AppComponent implements OnInit {

  constructor(private socket: Socket) {
  }

  public ngOnInit(): void {
    this.socket.connect();
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
