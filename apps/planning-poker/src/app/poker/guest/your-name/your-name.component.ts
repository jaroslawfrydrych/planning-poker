import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { GuestService } from '../guest.service';

@Component({
  selector: 'planning-poker-your-name',
  templateUrl: './your-name.component.html',
  styleUrls: ['./your-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourNameComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private guestService: GuestService,
              private router: Router,
              private $gaService: GoogleAnalyticsService) {
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/your-name');

    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control(null, [Validators.required])
    });
  }

  public get nameFormControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.guestService.joinRoom(this.nameFormControl.value);
      this.router.navigateByUrl('/guest/game');
    }
  }
}
