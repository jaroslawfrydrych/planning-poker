import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Cards } from '@shared/card/cards.enum';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'planning-poker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() public card: Cards;
  @Input() public selected$: Observable<Cards>;
  @Input() public boardCard: boolean;
  @Input() public playerReady = false;
  @Input() public label: string;
  @Output() public cardClick: EventEmitter<null> = new EventEmitter<null>();
  public cards = Cards;
  public isCardSelected = false;
  private destroySubject$: Subject<null> = new Subject<null>();

  public ngOnInit(): void {
    if (this.selected$) {
      this.selected$
        .pipe(
          takeUntil(this.destroySubject$)
        )
        .subscribe((selected: Cards) => {
          this.isCardSelected = selected === null ? null : selected === this.card;
        });
    }
  }

  public ngOnDestroy() {
    this.destroySubject$.next(null);
  }

  public onCardClick(): void {
    this.cardClick.emit(null);
  }
}
