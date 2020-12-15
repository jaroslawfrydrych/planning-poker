import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Coordinates, TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { ButtonColor } from '../button-color.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[haxit-button]',
  exportAs: 'haxitButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
@TakeUntilDestroy()
export class ButtonComponent implements OnInit {

  private buttonElement: HTMLButtonElement;
  private buttonColorSubject$: BehaviorSubject<ButtonColor> = new BehaviorSubject<ButtonColor>(ButtonColor.PRIMARY);
  private buttonSmallSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.buttonElement = this.getButtonElement();

    if (!this.buttonElement) {
      return;
    }

    this.addClassToButtonElement();
    this.setColorChangeSubject();
    this.setSizeChangeSubject();
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

  @HostListener('click', ['$event'])
  private click(event: MouseEvent) {
    const rippleElement: HTMLElement = this.createRippleElementToButton();
    const buttonDOMRect: DOMRect = this.buttonElement.getBoundingClientRect();
    const clickPosition: Coordinates = {
      x: event.clientX - buttonDOMRect.x,
      y: event.clientY - buttonDOMRect.y
    };

    this.addRippleElementToButton(rippleElement);
    this.setRipplePosition(rippleElement, clickPosition);


    setTimeout(() => {
      this.removeRippleElementFromButton(rippleElement);
    }, this.getRippleAnimationDuration(rippleElement) || 500);
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

  private getButtonElement(): HTMLButtonElement | null {
    const buttonElement: HTMLButtonElement = this.elementRef.nativeElement;

    if (buttonElement.tagName !== 'BUTTON') {
      console.error('haxitButton is used on element that is not button element!');
      return null;
    }

    return buttonElement;
  }

  private addClassToButtonElement(): void {
    this.renderer.addClass(this.buttonElement, 'haxit-button');
  }

  private createRippleElementToButton(): HTMLElement {
    const rippleElement: HTMLElement = this.renderer.createElement('div');
    this.renderer.addClass(rippleElement, 'haxit-button-ripple');
    this.renderer.addClass(rippleElement, this.getButtonColorClassName(this.buttonColor));
    return rippleElement;
  }

  private setRipplePosition(rippleElement: HTMLElement, position: Coordinates): void {
    const offsetPosition: Coordinates = {
      x: position.x - (rippleElement.offsetWidth / 2),
      y: position.y - (rippleElement.offsetHeight / 2)
    };
    this.renderer.setStyle(rippleElement, 'left', offsetPosition.x + 'px');
    this.renderer.setStyle(rippleElement, 'top', offsetPosition.y + 'px');
  }

  private addRippleElementToButton(rippleElement: HTMLElement): void {
    this.renderer.appendChild(this.buttonElement, rippleElement);
  }

  private removeRippleElementFromButton(rippleElement: HTMLElement): void {
    rippleElement.remove();
  }

  private getRippleAnimationDuration(rippleElement: HTMLElement): number {
    return getComputedStyle(rippleElement).animationDuration
      .slice(0, -1)
      .split('.')
      .map((value: string) => parseInt(value, 10))
      .map((value: number, index: number) => index === 0 ? value * 1000 : value * 100)
      .reduce((total: number, value: number) => total + value)
  }

  private setColorChangeSubject(): void {
    this.buttonColorSubject$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((color: ButtonColor) => this.handleButtonColorChange(color, this.buttonElement));
  }

  private setSizeChangeSubject(): void {
    this.buttonSmallSubject$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((small: boolean) => this.handleButtonSmallChange(small, this.buttonElement));
  }
}
