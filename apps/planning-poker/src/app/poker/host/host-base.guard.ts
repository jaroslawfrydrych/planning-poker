import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HostState } from './store/states/host.state';

export class HostBaseGuard {

  constructor(private store: Store,
              private router: Router) {
  }

  public navigateToHomePage(): void {
    this.router.navigateByUrl('/');
  }

  public hasRoomNumber(): Observable<boolean> {
    return this.store.select(HostState.roomNumber)
      .pipe(
        map((roomNumber: string) => !!roomNumber)
      );
  }
}
