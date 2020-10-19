import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

import { TakeUntilDestroy } from '@shared/decorators/take-until-destroy.decorator';

import { GuestService } from '../../guest/guest.service';

@Component({
  selector: 'planning-poker-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class LandingComponent implements OnInit {

  constructor(private router: Router,
              private store: Store,
              private guestService: GuestService,
              private $gaService: GoogleAnalyticsService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/');

    this.store.reset({});
  }

  public goToGuestPath(): void {
    this.router.navigateByUrl('/guest');
  }

  public goToHostPath(): void {
    this.router.navigateByUrl('/host');
  }
}
