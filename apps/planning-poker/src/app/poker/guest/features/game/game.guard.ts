import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GuestService } from '../../guest.service';
import { GuestState } from '../../store/states/guest.state';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {

  constructor(private store: Store,
              private readonly guestService: GuestService,
              private router: Router) {
  }

  public canActivate(): Observable<boolean> {
    return this.store.select(GuestState.hasRoomNumber)
      .pipe(
        tap((hasRoomNumber: boolean) => {
          if(!hasRoomNumber) {
            this.router.navigateByUrl('/');
          }
        })
      )
  }
}
