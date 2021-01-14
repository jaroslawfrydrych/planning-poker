import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { InsertionPointDirective } from '../insertion-point.directive';
import { ModalBase } from '../modal-base';
import { ModalConfig } from '../modal-config';

@Component({
  selector: 'haxit-modal-common',
  templateUrl: './modal-common.component.html',
  styleUrls: ['./modal-common.component.scss']
})
@TakeUntilDestroy()
export class ModalCommonComponent<T, K> implements OnInit, OnDestroy {

  @ViewChild(InsertionPointDirective, {static: true}) public insertionPoint;
  public childComponentRef: ComponentRef<T & ModalBase<K>>;
  public result$: Observable<boolean>;
  public dismiss$: Observable<void>;
  public modalConfig: ModalConfig<K>;
  private animationendSubject$: Subject<void>;
  private resultSubject$: Subject<boolean>;
  private dismissSubject$: Subject<void>;

  constructor(private elementRef: ElementRef,
              private render: Renderer2,
              private componentFactoryResolver: ComponentFactoryResolver) {
    this.resultSubject$ = new Subject<boolean>();
    this.result$ = this.resultSubject$.asObservable()
      .pipe(
        take(1)
      );

    this.dismissSubject$ = new Subject<void>();
    this.dismiss$ = this.dismissSubject$.asObservable();

    this.animationendSubject$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.setInitialAnimation();
    this.watchChildComponentClose();
  }

  ngOnDestroy(): void {
    this.childComponentRef.destroy();
  }

  public onModalOverlayClick(): void {
    if (this.modalConfig.disableClose) {
      return;
    }

    this.closeModal();
  }

  public loadChildComponent(component: Type<any>, modalConfig?: ModalConfig<K>): ComponentRef<T & ModalBase<K>> {
    const componentFactory: ComponentFactory<T & ModalBase<K>> = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef: ViewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.childComponentRef = viewContainerRef.createComponent<T & ModalBase<K>>(componentFactory);
    this.setModalConfig(modalConfig);
    return this.childComponentRef;
  }

  public closeModal(result?: boolean): void {
    this.setAnimation('modalOut 0.2s');
    this.resultSubject$.next(result || false);

    this.animationendSubject$
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.dismissSubject$.next(void 0);
      });
  }

  @HostListener('animationend')
  public afterAnimationDone() {
    this.animationendSubject$.next(void 0);
  }

  private setModalConfig(modalConfig: ModalConfig<K>): void {
    if (!modalConfig) {
      return;
    }

    if (modalConfig.data) {
      this.childComponentRef.instance.modalData = modalConfig.data;
    }

    this.modalConfig = modalConfig;
  }

  private setAnimation(animation: string): void {
    this.render.setStyle(this.elementRef.nativeElement, 'animation', animation);
  }

  private setInitialAnimation(): void {
    this.setAnimation('modalIn 0.5s');
  }

  private watchChildComponentClose(): void {
    if (this.childComponentRef.instance && this.childComponentRef.instance.close$) {
      this.childComponentRef.instance.close$
        .pipe(
          take(1),
          untilDestroyed(this)
        )
        .subscribe((result?: boolean) => this.closeModal(result));
    }
  }
}
