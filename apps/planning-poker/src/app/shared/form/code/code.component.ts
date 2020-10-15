import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'planning-poker-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public isLoading$: Observable<boolean>;
  @Input() public isSuccess$: Observable<boolean>;
  @Input() public isError$: Observable<boolean>;
  @Input() public codeLength = 6;
  @Input() public value: string;
  @Output() public codeSubmit: EventEmitter<string> = new EventEmitter<string>();
  @ViewChildren('inputElement') public inputElements: QueryList<ElementRef>;
  @ViewChild('submitButton', {read: ViewContainerRef}) public submitButton: ViewContainerRef;
  public formGroup: FormGroup;
  public codeFormArray: FormArray;
  private destroySubject$: Subject<null> = new Subject<null>();

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    const formControls: FormControl[] = [];

    for (let i = 0; i < this.codeLength; i++) {
      formControls.push(this.formBuilder.control(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(9),
        Validators.maxLength(1),
        Validators.pattern("^[0-9]*$")
      ]));
    }

    this.formGroup = this.formBuilder.group({
      code: this.formBuilder.array(formControls)
    });

    this.codeFormArray = this.formGroup.get('code') as FormArray;

    this.isLoading$
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe((value: boolean) => this.handleLoading(value));

    if(this.value) {
      const valueIntoArray: string[] = this.value.split('');
      valueIntoArray.forEach((value: string, index: number) => {
        this.codeFormArray.controls[index].setValue(value);
        this.submit();
      })
    }
  }

  public ngAfterViewInit(): void {
    this.focusFirstInputElement();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public get currentCodeValue(): string {
    return Object.values(this.codeFormArray.getRawValue()).join('');
  }

  public onInputKeyPress(event: KeyboardEvent, control: AbstractControl): void {
    if (!isFinite(parseInt(event.key, 10))) {
      setTimeout(() => {
        control.setValue(null);
      });
      return;
    }
  }

  public onInputKeyUp(event: KeyboardEvent, control: AbstractControl): void {
    if (control.valid) {
      const controlIndex: number = this.codeFormArray.controls.indexOf(control) + 1;

      if (controlIndex < this.codeLength) {
        this.focusInputElement(this.inputElements.toArray()[controlIndex].nativeElement);
      } else {
        this.submitButton.element.nativeElement.focus();
      }
    }
  }

  public submit() {
    if (this.formGroup.valid) {
      this.codeSubmit.emit(this.currentCodeValue);
    }
  }

  public reset() {
    this.formGroup.reset();
    this.focusFirstInputElement();
  }

  private focusInputElement(element: HTMLInputElement) {
    element.focus();
  }

  private focusFirstInputElement() {
    const firstInputElement: HTMLInputElement = this.inputElements.first.nativeElement;
    this.focusInputElement(firstInputElement);
  }

  private handleLoading(value: boolean) {
    if (value) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }
}
