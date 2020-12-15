import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[haxitTextFixedWidth]'
})
export class TextFixedWidthDirective implements OnInit, AfterViewInit {

  public htmlElement: HTMLElement;
  public elementTextArray: string[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.htmlElement = this.elementRef.nativeElement;
    this.renderer.addClass(this.htmlElement, 'text-fixed-width');
  }

  public ngAfterViewInit(): void {
    this.elementTextArray = this.htmlElement.innerText.split('');
    this.htmlElement.innerHTML = '';

    this.elementTextArray.forEach((value: string) => {
      const partElement: HTMLSpanElement = this.renderer.createElement('span');
      partElement.className = 'text-fixed-width-part-element';
      partElement.innerText = value;
      this.renderer.appendChild(this.htmlElement, partElement);
    });
  }

  @Input()
  public set change(value: any) {

  }

  private generateHtmlSpan() {

  }

}
