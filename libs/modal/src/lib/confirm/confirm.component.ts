import { Component, Input } from '@angular/core';

import { ButtonColor } from '@planning-poker/ui';

import { ModalBase } from '../modal-base';
import { ModalConfirmData } from './modal-confirm-data';

@Component({
  selector: 'haxit-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent extends ModalBase<ModalConfirmData> {

  public readonly buttonColors = ButtonColor;
}
