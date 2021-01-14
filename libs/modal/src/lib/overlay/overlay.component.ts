import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'haxit-overlay',
  template: '',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  public animationend$: Observable<void>;
  private animationendSubject$: Subject<void>;

  constructor(private elementRef: ElementRef,
              private render: Renderer2) {
    this.animationendSubject$ = new Subject<void>();
    this.animationend$ = this.animationendSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'animation', 'overlayIn 0.5s');
  }

  public dismiss(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'animation', 'overlayOut 0.25s');
  }

  @HostListener('animationend')
  public afterAnimationDone() {
    this.animationendSubject$.next(void 0);
  }
}
