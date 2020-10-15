import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomInfoInterface } from '@planning-poker/api-interfaces';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { HostService } from '../host.service';

@Component({
  selector: 'planning-poker-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit, OnDestroy {

  private destroySubject: Subject<null> = new Subject<null>();

  constructor(private router: Router,
              private $gaService: GoogleAnalyticsService,
              private hostService: HostService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');

    this.hostService.createRoom()
      .pipe(
        delay(1500),
        takeUntil(this.destroySubject)
      )
      .subscribe((roomInfo: RoomInfoInterface) => {
        this.hostService.hostRoom = roomInfo.id;
        this.hostService.gameState = roomInfo.state;
        this.router.navigateByUrl('/host/board');
      });
  }

  public ngOnDestroy(): void {
    this.destroySubject.next(null);
  }
}
