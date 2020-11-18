import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'planning-poker-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContainerComponent {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @Input() public set cardsInRow(count: number) {
    this.renderer.addClass(this.elementRef.nativeElement, 'cards-in-row-' + count);
  }
}
