import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JoinRoomCodeResponseDto } from '@planning-poker/api-interfaces';
import { CodeComponent } from '@shared/form/code/code.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, finalize, takeUntil, tap } from 'rxjs/operators';
import { GuestService } from '../guest.service';

@Component({
  selector: 'planning-poker-room-code',
  templateUrl: './room-code.component.html',
  styleUrls: ['./room-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomCodeComponent implements OnInit, OnDestroy {

  @ViewChild(CodeComponent) public codeComponent: CodeComponent;
  public loading$: Observable<boolean>;
  public success$: Observable<boolean>;
  public error$: Observable<boolean>;
  private loadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private successSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private errorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private destroySubject$: Subject<null> = new Subject<null>();

  constructor(private router: Router,
              private guestService: GuestService,
              private $gaService: GoogleAnalyticsService) {
    this.loading$ = this.loadingSubject$.asObservable();
    this.success$ = this.successSubject$.asObservable();
    this.error$ = this.errorSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/room-code');
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public onCodeSubmit(code: string) {
    if (this.loadingSubject$.getValue()) {
      return;
    }

    this.loadingSubject$.next(true);

    this.guestService.checkCode(code)
      .pipe(
        takeUntil(this.destroySubject$),
        finalize(() => this.loadingSubject$.next(false)),
        tap((response: JoinRoomCodeResponseDto) => {
          this.loadingSubject$.next(false);

          if (response.valid) {
            this.successSubject$.next(true);
          } else {
            this.errorSubject$.next(true);
          }
        }),
        delay(1000),
        tap(() => this.errorSubject$.next(false))
      )
      .subscribe((response: JoinRoomCodeResponseDto) => {
        if (response.valid) {
          this.router.navigateByUrl('/guest/your-name');
          this.$gaService.event('code_enter_valid', 'guest', 'Enter code valid');
        } else {
          this.codeComponent.reset();
          this.$gaService.event('code_enter_invalid', 'guest', 'Enter code invalid');
        }
      });
  }
}
