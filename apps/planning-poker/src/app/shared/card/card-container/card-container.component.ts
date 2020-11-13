import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'planning-poker-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContainerComponent {
}
