import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type
} from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { ConfirmComponent } from './confirm/confirm.component';
import { ModalConfirmData } from './confirm/modal-confirm-data';
import { ModalBase } from './modal-base';
import { ModalCommonComponent } from './modal-common/modal-common.component';
import { ModalConfig } from './modal-config';
import { OverlayComponent } from './overlay/overlay.component';
import { ModalAlertData } from './alert/modal-alert-data';
import { AlertComponent } from './alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private overlayComponentRef: ComponentRef<OverlayComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
  }

  public open<T, K>(component: Type<T>, modalConfig?: ModalConfig<K>): Observable<boolean> {
    const modalComponentRef: ComponentRef<ModalCommonComponent<T & ModalBase<K>, K>> = this.createModal<T & ModalBase<K>, K>();
    modalComponentRef.instance.loadChildComponent(component, modalConfig);

    this.overlayComponentRef = this.createOverlay();
    this.appendToBody(this.overlayComponentRef);
    this.appendToBody(modalComponentRef);

    return modalComponentRef.instance.result$
      .pipe(
        take(1),
        tap(() => this.removeModal<T & ModalBase<K>, K>(modalComponentRef))
      );
  }

  public confirm(data: ModalConfirmData): Observable<boolean> {
    return this.open<ConfirmComponent, ModalConfirmData>(ConfirmComponent, {
      data
    });
  }

  public alert(text: string): Observable<boolean> {
    return this.open<AlertComponent, ModalAlertData>(AlertComponent, {
      data: {
        text
      }
    });
  }

  private appendToBody<T>(componentRef: ComponentRef<T>): void {
    this.applicationRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }

  private createModal<T, K>(): ComponentRef<ModalCommonComponent<T, K>> {
    return this.createComponent<ModalCommonComponent<T, K>>(ModalCommonComponent);
  }

  private createOverlay(): ComponentRef<OverlayComponent> {
    return this.createComponent<OverlayComponent>(OverlayComponent);
  }

  private createComponent<T>(component: Type<T>): ComponentRef<T> {
    const componentFactory: ComponentFactory<T> = this.componentFactoryResolver
      .resolveComponentFactory(component);

    return componentFactory.create(this.injector);
  }

  private removeModal<T, K>(component: ComponentRef<ModalCommonComponent<T, K>>): void {
    this.removeOverlay();

    component.instance.dismiss$
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.detachAndDestroyModal<T, K>(component);
      });
  }

  private removeOverlay(): void {
    if (!this.overlayComponentRef) {
      return;
    }

    this.overlayComponentRef.instance.dismiss();

    this.overlayComponentRef.instance.animationend$
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.applicationRef.detachView(this.overlayComponentRef.hostView);
        this.overlayComponentRef.destroy();
        this.overlayComponentRef = null;
      });
  }

  private detachAndDestroyModal<T, K>(component: ComponentRef<ModalCommonComponent<T, K>>) {
    this.applicationRef.detachView(component.hostView);
    component.destroy();
  }
}
