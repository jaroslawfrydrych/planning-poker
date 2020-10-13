import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { of, Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'planning-poker-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit, OnDestroy {

  private destroySubject: Subject<null> = new Subject<null>();

  constructor(private router: Router,
              private $gaService: GoogleAnalyticsService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/host/board');

    this.handleWaitPage();
  }

  public ngOnDestroy(): void {
    this.destroySubject.next(null);
  }

  private handleWaitPage() {
    of(null)
      .pipe(
        delay(1500),
        takeUntil(this.destroySubject)
      )
      .subscribe(() => {
        this.router.navigateByUrl('/host/board');
      });
  }
}
