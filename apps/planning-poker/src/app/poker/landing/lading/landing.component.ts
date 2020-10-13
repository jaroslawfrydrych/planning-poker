import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Socket } from 'ngx-socket-io';
import { GuestService } from '../../guest/guest.service';
import { HostService } from '../../host/host.service';

@Component({
  selector: 'planning-poker-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {

  constructor(private router: Router,
              private socket: Socket,
              private guestService: GuestService,
              private hostService: HostService,
              private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.$gaService.pageView('/');
    this.guestService.guestRoom = null;
    this.hostService.hostRoom = null;
  }

  public goToGuestPath(): void {
    this.router.navigateByUrl('/guest');

  }

  public goToHostPath(): void {
    this.router.navigateByUrl('/host');
  }
}
