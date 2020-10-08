import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'planning-poker-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
}
