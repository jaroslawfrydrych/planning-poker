import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haxit-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
}
