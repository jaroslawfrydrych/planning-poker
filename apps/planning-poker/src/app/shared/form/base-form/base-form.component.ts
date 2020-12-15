import { Host, Input, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export class BaseFormComponent implements OnInit, OnDestroy {
  @Input() public placeholder: string;
  @Input() public formControlName: string;
  @Input() public color: 'light' | 'dark';
  @Input() public name: string;
  @Input() public fullWidth = false;
  @Input() public filled = false;
  @Input() public placeholderIcon: string;

  private isFocusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private controlValueChangesSub: Subscription;
  private hasControlValue: boolean;
  public control: AbstractControl = new FormControl();
  public isFocu$: Observable<boolean> = this.isFocusSubject.asObservable();

  protected value: any = null;

  protected subscriptions: Subscription = new Subscription();

  constructor(@Optional() @Host() @SkipSelf() protected localControlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.init();

    if (!this.color) {
      this.color = 'light';
    }

    if (!this.name) {
      this.name = this.formControlName;
    }

    this.handleWhenValue(this.control.value);

    this.controlValueChangesSub = this.control.valueChanges
      .subscribe(value => {
        this.handleWhenValue(value);
      });
  }

  protected init() {
    if (this.localControlContainer) {
      if (this.formControlName) {
        this.control = this.localControlContainer.control.get(this.formControlName);
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }
  }

  private handleWhenValue(value: any) {
    this.hasControlValue = !!value;

    if (this.hasControlValue) {
      this.focusField();
    }
  }

  public hasControlError(): boolean {
    return this.control.invalid && this.control.touched;
  }

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  public onFocus() {
    this.focusField();
  }

  public onBlur() {
    this.unFocusField();
  }

  private focusField() {
    this.isFocusSubject.next(true);
  }

  private unFocusField() {
    if (!!this.control.value) {
      return;
    }
    this.isFocusSubject.next(false);
  }

  public hasError(errorType) {
    if (this.control.errors && this.control.touched) {
      if (typeof this.control.errors[errorType] !== 'undefined') {
        return true;
      }
    }

    return false;
  }

  public showMessageForError(errorName: string) {
    if (!this.control.errors) {
      return false;
    }
    const firstErrorParam = Object.keys(this.control.errors)[0];
    if (firstErrorParam !== errorName) {
      return false;
    }
    return this.control.hasError(errorName) && this.hasControlError();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    if (this.controlValueChangesSub) {
      this.controlValueChangesSub.unsubscribe();
    }
  }

}
