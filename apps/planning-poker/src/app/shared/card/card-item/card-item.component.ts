import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'planning-poker-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent {
}
