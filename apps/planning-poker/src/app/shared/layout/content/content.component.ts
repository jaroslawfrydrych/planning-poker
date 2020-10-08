import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'planning-poker-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
}
