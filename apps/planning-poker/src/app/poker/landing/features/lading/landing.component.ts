import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppInfoDtoInterface } from '@planning-poker/api-interfaces';
import { TakeUntilDestroy } from '@planning-poker/utils';

import { StoreName } from '@store/store-name.enum';
import { StoreModel } from '@store/store.model';

import { GuestService } from '../../../guest/guest.service';
import { LandingService } from './landing.service';

@Component({
  selector: 'planning-poker-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class LandingComponent implements OnInit {

  public appInfo$: Observable<string>;

  constructor(private router: Router,
              private store: Store,
              private guestService: GuestService,
              private $gaService: GoogleAnalyticsService,
              private landingService: LandingService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/');
    this.resetStates();

    this.appInfo$ = this.landingService.getAppInfo()
      .pipe(
        map((appInfo: AppInfoDtoInterface) => appInfo.info));
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
