import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild } from '@angular/core';

import { ButtonColor } from '@shared/button/button-color.enum';
import { ButtonDirective } from '@shared/button/button.directive';

@Component({
  selector: 'planning-poker-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContainerComponent implements AfterViewInit {

  @ContentChild(ButtonDirective) planingPokerButton: ButtonDirective;
  public hasPlaningPokerButton = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    if (this.planingPokerButton) {
      this.hasPlaningPokerButton = true;
      this.planingPokerButton.small = true;
      this.planingPokerButton.buttonColor = ButtonColor.TRANSPARENT;
      this.changeDetectorRef.detectChanges();
    }
  }
}
