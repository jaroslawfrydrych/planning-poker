import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GuestState } from '../store/states/guest.state';

@Injectable({
  providedIn: 'root'
})
export class RoomCodeGuard implements CanActivate {

  constructor(private store: Store,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(GuestState.hasRoomNumber)
      .pipe(
        map((hasRoomNumber: boolean) => {
          if (hasRoomNumber) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        })
      );
  }
}
