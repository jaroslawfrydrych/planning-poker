import { ComponentRef } from '@angular/core';
import { take } from 'rxjs/operators';

import { ModalCommonComponent } from './modal-common/modal-common.component';

export class ModalRef<T> {
  private componentRef: ComponentRef<ModalCommonComponent<T>>;

  constructor(componentRef: ComponentRef<ModalCommonComponent<T>>) {
    this.setComponentRef(componentRef);

    this.componentRef.instance.close$
      .pipe(
        take(1)
      )
      .subscribe(() => this.onOverlayClick());
  }

  private setComponentRef(componentRef: ComponentRef<ModalCommonComponent<T>>): void {
    this.componentRef = componentRef;
  }

  private onOverlayClick(): void {
    this.removeModal();
  }

  private removeModal(): void {
    console.log('removeModal');
  }
}
