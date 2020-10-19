import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

import { GuestService } from '../../guest/guest.service';
import { HostState } from '../../host/store/states/host.state';

@Component({
  selector: 'planning-poker-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {

  constructor(private router: Router,
              private store: Store,
              private guestService: GuestService,
              private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.$gaService.pageView('/');
    this.store.reset(HostState);
  }

  public goToGuestPath(): void {
    this.router.navigateByUrl('/guest');

  }

  public goToHostPath(): void {
    this.router.navigateByUrl('/host');
  }
}
