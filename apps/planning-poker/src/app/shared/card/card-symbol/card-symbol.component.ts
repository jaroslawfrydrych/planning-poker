import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cards } from '@planning-poker/api-interfaces';

@Component({
  selector: 'planning-poker-card-symbol',
  templateUrl: './card-symbol.component.html',
  styleUrls: ['./card-symbol.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSymbolComponent {

  @Input() public card: Cards;
  public cards: typeof Cards = Cards;
}
