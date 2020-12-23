import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

import { Coordinates } from '@planning-poker/utils';

@Directive({
  selector: '[haxitRipple]'
})
export class RippleDirective implements OnInit {

  public nativeElement: HTMLElement;
  @Input() public additionalRippleClass = '';

  constructor(protected renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  public ngOnInit() {
    this.nativeElement = this.getNativeElement();
  }

  @HostListener('mousedown', ['$event'])
  private click(event: MouseEvent) {
    const rippleElement: HTMLElement = this.createRippleElement();
    const elementDOMRect: DOMRect = this.nativeElement.getBoundingClientRect();
    const clickPosition: Coordinates = {
      x: event.clientX - elementDOMRect.x,
      y: event.clientY - elementDOMRect.y
    };

    this.addRippleToElement(rippleElement);
    this.setRipplePosition(rippleElement, clickPosition);

    setTimeout(() => {
      this.removeRippleFromElement(rippleElement);
    }, this.getRippleAnimationDuration(rippleElement) || 500);
  }

  private createRippleElement(): HTMLElement {
    const rippleElement: HTMLElement = this.renderer.createElement('div');
    this.renderer.addClass(rippleElement, 'haxit-ripple');

    if (this.additionalRippleClass) {
      this.renderer.addClass(rippleElement, this.additionalRippleClass);
    }

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

  private getNativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  private addRippleToElement(rippleElement: HTMLElement): void {
    this.renderer.appendChild(this.nativeElement, rippleElement);
  }

  private removeRippleFromElement(rippleElement: HTMLElement): void {
    rippleElement.remove();
  }

  private getRippleAnimationDuration(rippleElement: HTMLElement): number {
    return getComputedStyle(rippleElement).animationDuration
      .slice(0, -1)
      .split('.')
      .map((value: string, index: number) => {
        const parsed: number = parseInt(value, 10);
        const pow: number = Math.pow(10, parsed.toString().length - 1);
        const divided: number = parsed / pow;
        return index === 0 ? divided * 1000 : divided * 100
      })
      .reduce((total: number, value: number) => {
        return total + value;
      });
  }
}
