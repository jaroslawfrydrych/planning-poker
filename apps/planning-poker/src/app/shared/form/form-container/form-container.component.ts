import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild } from '@angular/core';

import { ButtonColor, ButtonComponent } from '@planning-poker/ui';

@Component({
  selector: 'planning-poker-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContainerComponent implements AfterViewInit {

  @ContentChild(ButtonComponent) haxitButton: ButtonComponent;
  public hasHaxitButton = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    console.log(this.haxitButton);
    if (this.haxitButton) {
      this.hasHaxitButton = true;
      this.haxitButton.small = true;
      this.haxitButton.buttonColor = ButtonColor.TRANSPARENT;
      this.changeDetectorRef.detectChanges();
    }
  }
}
