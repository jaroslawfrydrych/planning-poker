import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'planning-poker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private socket: Socket) {
  }

  public ngOnInit(): void {
    this.socket.connect();
  }
}
