import { Component } from '@angular/core';

import { ModalBase } from '@planning-poker/modal';

import { ModalGameResultsConfig } from './modal-game-results-config';

@Component({
  selector: 'planning-poker-modal-game-results-review',
  templateUrl: './modal-game-results-review.component.html',
  styleUrls: ['./modal-game-results-review.component.scss']
})
export class ModalGameResultsReviewComponent extends ModalBase<ModalGameResultsConfig> {

}
