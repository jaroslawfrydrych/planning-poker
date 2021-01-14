import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { RippleDirective } from '../../ripple/ripple.directive';
import { ButtonColor } from '../button-color.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[haxit-button]',
  exportAs: 'haxitButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
@TakeUntilDestroy()
export class ButtonComponent extends RippleDirective implements OnInit {

  private buttonColorSubject$: BehaviorSubject<ButtonColor> = new BehaviorSubject<ButtonColor>(ButtonColor.PRIMARY);
  private buttonSmallSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(protected renderer: Renderer2,
              elementRef: ElementRef) {
    super(renderer, elementRef);
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.addClassToButtonElement();
    this.setColorChangeSubject();
    this.setSizeChangeSubject();
    this.additionalRippleClass = this.getButtonColorClassName(this.buttonColor);
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
    const className = 'button-small';

    if (small) {
      this.renderer.addClass(buttonElement, className);
    } else {
      this.renderer.removeClass(buttonElement, className);
    }
  }

  private getButtonColorClassName(color: ButtonColor): string {
    return 'button-color-' + color;
  }

  private addClassToButtonElement(): void {
    this.renderer.addClass(this.nativeElement, 'haxit-button');
  }

  private setColorChangeSubject(): void {
    this.buttonColorSubject$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((color: ButtonColor) => this.handleButtonColorChange(color, this.nativeElement as HTMLButtonElement));
  }

  private setSizeChangeSubject(): void {
    this.buttonSmallSubject$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((small: boolean) => this.handleButtonSmallChange(small, this.nativeElement as HTMLButtonElement));
  }
}
