import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Input()
  @HostBinding('class.board-card-host') public boardCard: boolean;
  @Output() public cardClick: EventEmitter<null> = new EventEmitter<null>();
  @Input() public playerReady = false;
  @Input() public label: string;
  @Input() public review: boolean;
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
