import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { Cards, GameStates } from '@planning-poker/api-interfaces';

@Component({
  selector: 'planning-poker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public card: Cards;
  @Input() public selectedCard: Cards;
  @Input() public label: string;
  @Input() public gameState: GameStates;
  @Input()
  @HostBinding('class.board-card-host') public boardCard: boolean;
  @Input() public playerReady = false;
  @Output() public cardClick: EventEmitter<null> = new EventEmitter<null>();
  public cards = Cards;

  public get isCardSelected(): boolean {
    return this.selectedCard === null ? null : this.selectedCard === this.card;
  }

  public get isInReviewState(): boolean {
    return this.gameState === GameStates.REVIEW;
  }

  public onCardClick(): void {
    this.cardClick.emit(null);
  }
}
