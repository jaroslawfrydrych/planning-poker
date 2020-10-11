import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
              private router: Router) {
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control(null, [Validators.required])
    });
  }

  public get nameFormControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.guestService.joinRoom(this.formGroup.get('name').value);
      this.router.navigateByUrl('/guest/game');
    }
  }
}
