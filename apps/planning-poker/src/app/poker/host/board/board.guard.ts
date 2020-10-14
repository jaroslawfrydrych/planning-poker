import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HostService } from '../host.service';

@Injectable({
  providedIn: 'root'
})
export class BoardGuard implements CanActivate {

  constructor(private router: Router,
              private hostService: HostService) {
  }

  public canActivate(): boolean {
    const hasHostRoom: boolean = !!this.hostService.hostRoom;

    if (!hasHostRoom) {
      this.router.navigateByUrl('/');
    }

    return !!this.hostService.hostRoom;
  }
}
