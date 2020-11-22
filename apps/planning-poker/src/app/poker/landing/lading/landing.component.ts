import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

import { TakeUntilDestroy } from '@shared/decorators/take-until-destroy.decorator';
import { StoreName } from '@store/store-name.enum';
import { StoreModel } from '@store/store.model';

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
    this.resetStates();
  }

  public goToGuestPath(): void {
    this.router.navigateByUrl('/guest');
  }

  public goToHostPath(): void {
    this.router.navigateByUrl('/host');
  }

  private resetStates(): void {
    const storeSnapshoot: StoreModel = this.store.snapshot();

    this.store.reset({
      ...storeSnapshoot,
      [StoreName.HOST]: {},
      [StoreName.GUEST]: {}
    });
  }
}
