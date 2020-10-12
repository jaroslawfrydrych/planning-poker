import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'planning-poker-lading',
  templateUrl: './lading.component.html',
  styleUrls: ['./lading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LadingComponent implements OnInit {

  constructor(private router: Router,
              private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.$gaService.pageView('/');
  }

  public goToGuestPath(): void {
    this.router.navigateByUrl('/guest');

  }

  public goToHostPath(): void {
    this.router.navigateByUrl('/host');
  }
}
