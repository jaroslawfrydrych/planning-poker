import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HostService } from '../host.service';

@Injectable({
  providedIn: 'root'
})
export class WaitGuard implements CanActivate {

  constructor(private hostService: HostService,
              private router: Router) {
  }

  canActivate(): boolean {
    const hasHostRoom: boolean = !!this.hostService.hostRoom;

    if (hasHostRoom) {
      this.router.navigateByUrl('/');
    }

    return !hasHostRoom;
  }
}
