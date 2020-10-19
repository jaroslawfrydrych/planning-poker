import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ButtonColor } from '@shared/button/button-color.enum';

@Directive({
  selector: '[planningPokerButton]'
})
export class ButtonDirective implements OnInit, OnDestroy {

  private buttonColorSubject$: BehaviorSubject<ButtonColor> = new BehaviorSubject<ButtonColor>(ButtonColor.PRIMARY);
  private buttonSmallSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private onDestroySubject$: Subject<null> = new Subject<null>();

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    const buttonElement: HTMLButtonElement = this.elementRef.nativeElement;

    if (buttonElement.tagName !== 'BUTTON') {
      console.error('planningPokerButton is used on element that is not button element!');
      return;
    }

    this.renderer.addClass(buttonElement, 'planning-poker-button');

    this.buttonColorSubject$
      .pipe(
        takeUntil(this.onDestroySubject$)
      )
      .subscribe((color: ButtonColor) => this.handleButtonColorChange(color, buttonElement));

    this.buttonSmallSubject$
      .pipe(
        takeUntil(this.onDestroySubject$)
      )
      .subscribe((small: boolean) => this.handleButtonSmallChange(small, buttonElement));
  }

  public ngOnDestroy(): void {
    this.onDestroySubject$.next(null);
  }

  @Input()
  public set buttonColor(value: ButtonColor) {
    this.buttonColorSubject$.next(value);
  }

  public get buttonColor(): ButtonColor {
    return this.buttonColorSubject$.getValue();
  }

  @Input()
  public set small(value: boolean) {
    this.buttonSmallSubject$.next(value !== false);
  }

  public get small(): boolean {
    return this.buttonSmallSubject$.getValue();
  }

  private handleButtonColorChange(color: ButtonColor, buttonElement: HTMLButtonElement): void {
    Object.values(ButtonColor)
      .forEach((value: ButtonColor) => this.renderer.removeStyle(buttonElement, this.getButtonColorClassName(value)));

    this.renderer.addClass(buttonElement, this.getButtonColorClassName(color));
  }

  private handleButtonSmallChange(small: boolean, buttonElement: HTMLButtonElement): void {
    const className = 'planning-poker-button-small';

    if (small) {
      this.renderer.addClass(buttonElement, className);
    } else {
      this.renderer.removeClass(buttonElement, className);
    }
  }

  private getButtonColorClassName(color: ButtonColor): string {
    return 'planning-poker-button-color-' + color;
  }
}
