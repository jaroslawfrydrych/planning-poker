import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { TakeUntilDestroy } from '@shared/decorators/take-until-destroy.decorator';
import { untilDestroyed } from '@shared/operators/until-destroyed.operator';

import { GuestActions } from '../store/actions/guest.actions';
import JoinRoom = GuestActions.JoinRoom;
import GuestNameInit = GuestActions.GuestNameInit;

@Component({
  selector: 'planning-poker-your-name',
  templateUrl: './your-name.component.html',
  styleUrls: ['./your-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class YourNameComponent implements OnInit {

  public formGroup: FormGroup;
  private userNameLocalStorageItemKey = 'user-name';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private store: Store) {
  }

  public ngOnInit(): void {
    this.store.dispatch(new GuestNameInit());

    const name: string = localStorage.getItem(this.userNameLocalStorageItemKey);

    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control(name || null, [Validators.required])
    });
  }

  public get nameFormControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  public submit(): void {
    if (this.formGroup.valid) {
      localStorage.setItem(this.userNameLocalStorageItemKey, this.nameFormControl.value);

      this.store.dispatch(new JoinRoom(this.nameFormControl.value))
        .pipe(
          untilDestroyed(this)
        )
        .subscribe(() => this.router.navigateByUrl('/guest/game'));
    }
  }
}
