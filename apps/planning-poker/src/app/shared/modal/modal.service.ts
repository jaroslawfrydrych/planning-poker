import { Injectable } from '@angular/core';

import { ModalRef } from '@shared/modal/modal-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {
  }

  public open(): ModalRef {
    return new ModalRef();
  }
}
