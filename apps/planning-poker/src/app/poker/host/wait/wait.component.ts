import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { delay } from 'rxjs/operators';

import { TakeUntilDestroy, untilDestroyed } from '@shared/decorators/take-until-destroy.decorator';

import { HostActions } from '../store/actions/host.actions';
import CreateRoom = HostActions.CreateRoom;

@Component({
  selector: 'planning-poker-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
@TakeUntilDestroy()
export class WaitComponent implements OnInit {

  constructor(private router: Router,
              private store: Store,
              private $gaService: GoogleAnalyticsService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');

    this.store.dispatch(new CreateRoom())
      .pipe(
        delay(1500),
        untilDestroyed(this)
      )
      .subscribe(() => this.router.navigateByUrl('/host/board'));
  }
}
