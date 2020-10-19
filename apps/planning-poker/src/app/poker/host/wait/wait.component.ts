import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

import { HostActions } from '../store/actions/host.actions';
import CreateRoom = HostActions.CreateRoom;

@Component({
  selector: 'planning-poker-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit, OnDestroy {

  private destroySubject: Subject<null> = new Subject<null>();

  constructor(private router: Router,
              private store: Store,
              private $gaService: GoogleAnalyticsService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');

    this.store.dispatch(new CreateRoom())
      .pipe(
        delay(1500),
        takeUntil(this.destroySubject)
      )
      .subscribe(() => this.router.navigateByUrl('/host/board'));
  }

  public ngOnDestroy(): void {
    this.destroySubject.next(null);
  }
}
