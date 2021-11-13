import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { isObservable, Observable } from 'rxjs';

import { TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

@Component({
  selector: 'planning-poker-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class CardContainerComponent {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @Input()
  public set cardsInRow$(count$: Observable<number>) {
    if (!count$ || !count$.pipe) {
      return;
    }

    count$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((count => this.renderer.addClass(this.elementRef.nativeElement, 'cards-in-row-' + count)));
  }
}
