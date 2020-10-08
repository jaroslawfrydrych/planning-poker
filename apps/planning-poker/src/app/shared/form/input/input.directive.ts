import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[planningPokerInput]'
})
export class InputDirective implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    const inputElement: HTMLInputElement = this.elementRef.nativeElement;

    this.renderer.addClass(inputElement, 'planing-poker-input');
  }

}
