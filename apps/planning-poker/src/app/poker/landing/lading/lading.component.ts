import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'planning-poker-lading',
  templateUrl: './lading.component.html',
  styleUrls: ['./lading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LadingComponent {

  constructor(private router: Router) {
  }

  public goToGuestPath(): void {
    this.router.navigateByUrl('/guest');

  }

  public goToHostPath(): void {
    this.router.navigateByUrl('/host');
  }
}
