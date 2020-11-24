import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  Inject,
  Injectable,
  Injector,
  Type
} from '@angular/core';

import { ModalCommonComponent } from '@shared/modal/modal-common/modal-common.component';
import { ModalConfig } from '@shared/modal/model/modal-config.interface';
import { DynamicComponentInjector } from '@shared/injector/dynamic-component.injector';
import { ModalRef } from '@shared/modal/modal-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(@Inject(DOCUMENT) private document: Document,
              private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
  }

  public open<T, K>(componentType?: Type<T>, config?: ModalConfig<K>) {
    console.log('open modal');
    const map: WeakMap<any, any> = new WeakMap<any, any>();

    const modalRef: ModalRef = new ModalRef();
    const componentFactory: ComponentFactory<ModalCommonComponent> = this.componentFactoryResolver
      .resolveComponentFactory(ModalCommonComponent);
    const componentRef: ComponentRef<ModalCommonComponent> = componentFactory
      .create(new DynamicComponentInjector(this.injector));
    this.applicationRef.attachView(componentRef.hostView);
    this.appendModalToBody(componentRef);
  }

  private appendModalToBody(modalRefInstance: ComponentRef<ModalCommonComponent>) {
    console.log(modalRefInstance.instance.modalContent);
  }

}
