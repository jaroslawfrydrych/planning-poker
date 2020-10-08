import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, delay, finalize, takeUntil, tap } from 'rxjs/operators';
import { GuestService } from '../guest.service';

@Component({
  selector: 'planning-poker-room-code',
  templateUrl: './room-code.component.html',
  styleUrls: ['./room-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomCodeComponent implements OnDestroy {

  public loading$: Observable<boolean>;
  public success$: Observable<boolean>;
  private loadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private successSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private destroySubject$: Subject<null> = new Subject<null>();

  constructor(private router: Router,
              private guestService: GuestService) {
    this.loading$ = this.loadingSubject$.asObservable();
    this.success$ = this.successSubject$.asObservable();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public onCodeSubmit(code: string) {
    this.loadingSubject$.next(true);

    this.guestService.checkCode(code)
      .pipe(
        takeUntil(this.destroySubject$),
        finalize(() => this.loadingSubject$.next(false)),
        catchError(() => this.handleCodeError()),
        tap(() => {
          this.loadingSubject$.next(false);
          this.successSubject$.next(true);
        }),
        delay(1000)
      )
      .subscribe(() => {
        this.router.navigateByUrl('/guest/your-name');
      });
  }

  private handleCodeError(): Observable<any> {
    return throwError(null);
  }
}
