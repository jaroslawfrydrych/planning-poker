import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { GuestService } from '../guest.service';

@Injectable({
  providedIn: 'root'
})
export class YourNameGuard implements CanActivate {

  constructor(private readonly guestService: GuestService,
              private router: Router) {
  }

  canActivate(): boolean {
    const valid: boolean = !!this.guestService.guestRoom;

    if (!valid) {
      this.router.navigateByUrl('/');
    }

    return valid;
  }
}
