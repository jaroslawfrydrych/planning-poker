import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor() { }

  public checkCode(code: string): Observable<null> {
    return of(null)
      .pipe(delay(1500));
  }
}
