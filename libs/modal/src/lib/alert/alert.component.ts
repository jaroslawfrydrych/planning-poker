import { Component } from '@angular/core';

import { ButtonColor } from '@planning-poker/ui';

import { ModalBase } from '../modal-base';
import { ModalAlertData } from './modal-alert-data';

@Component({
  selector: 'haxit-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent extends ModalBase<ModalAlertData> {

  public readonly buttonColors = ButtonColor;
}
