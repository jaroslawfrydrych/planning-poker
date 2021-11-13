import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GuestState } from '../../store/states/guest.state';

@Injectable({
  providedIn: 'root'
})
export class YourNameGuard implements CanActivate {

  constructor(private store: Store,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(GuestState.hasRoomNumber)
      .pipe(
        tap((hasRoomNumber: boolean) => {
          if (!hasRoomNumber) {
            this.router.navigateByUrl('/');
          }
        })
      );
  }
}
