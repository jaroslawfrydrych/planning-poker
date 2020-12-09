import { AfterViewInit, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

import { ButtonColor } from '@shared/button/button-color.enum';
import { cookiesComponentAnimation } from '@shared/cookies/cookies/cookies.component.animation';

@Component({
  selector: 'planning-poker-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
  animations: [
    cookiesComponentAnimation
  ]
})
export class CookiesComponent implements AfterViewInit {

  public displayCookiesSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly buttonColor = ButtonColor;
  private readonly cookieName = 'planing-poker-cookies-accept';
  private readonly cookieValue = '1';

  constructor(private cookieService: CookieService) {
  }

  ngAfterViewInit(): void {
    const cookie: string = this.cookieService.get(this.cookieName);

    if (!cookie || cookie !== this.cookieValue) {
      this.displayCookiesSubject$.next(true);
    }
  }

  public acceptCookies() {
    this.displayCookiesSubject$.next(false);
    const expiresDate = new Date();
    expiresDate.setMonth(expiresDate.getMonth() + 24);
    this.cookieService.set(this.cookieName, this.cookieValue, expiresDate);
  }
}
